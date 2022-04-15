import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-dummy',
  templateUrl: './delete-dummy.component.html',
  styleUrls: ['./delete-dummy.component.css']
})
export class DeleteDummyComponent implements OnInit {

  constructor(private router: Router) {
    this.router.navigate(['/posts']);
  }

  ngOnInit(): void {
  }

}
