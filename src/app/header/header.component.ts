import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {SharedService} from "../shared/shared.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {

  
  @Input() department!: string; 
    
  

  constructor(
    private shared:SharedService,
    public auth: AuthService, 
    @Inject(DOCUMENT) private doc: Document
    ) { }

  message = "Logged in if visible"

  ngOnInit(): void {
    this.shared.setMessage(this.message)
  }
  

  logout(): void{
    this.auth.logout({ returnTo: this.doc.location.origin });
  }  


  }


