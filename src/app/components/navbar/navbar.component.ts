import { Component, OnInit, ElementRef } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   

    constructor( private element: ElementRef, private router: Router) {
      
    }

    ngOnInit(){
     
    }

 
   
  
}
