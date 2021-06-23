import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const Noticebutton = document.getElementById('noticebutton') ;  
    const modal = document.getElementById('notice-modal');
    const Noticedonebutton = document.getElementById('Noticedone');

    Noticebutton?.addEventListener('click',()=>{
      modal?.classList.add('is-active');
     })

   Noticedonebutton?.addEventListener('click',()=>{
      modal?.classList.remove('is-active');
     })


  }

}
