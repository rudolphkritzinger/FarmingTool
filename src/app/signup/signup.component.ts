import { Component, OnInit } from '@angular/core';
import {SharedService} from "../shared/shared.service"

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

  message!: string;



  constructor(private shared:SharedService) { }

  ngOnInit(): void {
  this.message= this.shared.getMessage()

  }

  submitForm() {
    const message = `My name is ${this.fullname} `;
  //grap all fields and values
  alert(message);
  }

}
