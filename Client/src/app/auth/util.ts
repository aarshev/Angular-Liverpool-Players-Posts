import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;


    if (!value) {
        return null
    }

    if (!/.{6,}@([a-zA-Z]+)\.([a-zA-Z]+)$/.test(value)) {
        return {
            email: true,
        }
    }
    return null;
}


export function passwordMatch(passwordFormControl: AbstractControl) {
    const validtorFn: ValidatorFn = (rePasswordFormControl: AbstractControl) => {
        if (passwordFormControl.value !== rePasswordFormControl.value) {
            return {
                passwordMissmatch: true
            }
        }

        return null;
    }

    return validtorFn;
}
