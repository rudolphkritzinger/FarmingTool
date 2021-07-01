import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from "../shared/shared.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {

  
  @Input() department!: string; 
    
  

  constructor(private shared:SharedService) { }
  message = "I am child 1 tester"

  ngOnInit(): void {
    this.shared.setMessage(this.message)
  }
  




  }


