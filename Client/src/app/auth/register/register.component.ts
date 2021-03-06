import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUserDto, UserService } from 'src/app/core/user.service';
import { emailValidator, passwordMatch } from '../util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(5)]);

  get passwordsGroup(): FormGroup {
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }


  registerFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl(null, [Validators.required, emailValidator]),
    'passwords': new FormGroup({
      'password': this.passwordControl,
      'repass': new FormControl(null, [passwordMatch(this.passwordControl)]),
    })
  })

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  
  ngOnInit(): void {
  }
  
  shouldShowErrorForControl(controlName: string, sourceGroup: FormGroup = this.registerFormGroup) {
    return sourceGroup.controls[controlName].touched && sourceGroup.controls[controlName].invalid
  }

  handleRegister(): void {
    const {  email, passwords} = this.registerFormGroup.value;

    const body: CreateUserDto = {
      email: email,
      password: passwords.password,
    }

    this.userService.register$(body).subscribe(() => {
      this.router.navigate(['/home']);
    })
  }
}
