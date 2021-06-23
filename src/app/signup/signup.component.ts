import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  fullname!: string;
  email!: string;
  department!: string;
  username!: string;
  password!: string;
  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    const message = `My name is ${this.fullname} `;
  //grap all fields and values
  alert(message);
  }

}
