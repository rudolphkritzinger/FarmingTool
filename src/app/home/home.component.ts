import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: RouterModule) { }

  ngOnInit(): void {

    const Loginbutton = document.getElementById('login') ;  
    const modal = document.getElementById('page-modal');
    const Cancelbutton = document.getElementById('logincancel');
    const Submitbutton = document.getElementById('loginsubmit');   


    Loginbutton?.addEventListener('click',()=>{
      modal?.classList.add('is-active');
     })
 
     Cancelbutton?.addEventListener('click',()=>{
       modal?.classList.remove('is-active');
     })
 
     Submitbutton?.addEventListener('click',()=>{
       modal?.classList.remove('is-active');
 
     })
  }


 
  

}

