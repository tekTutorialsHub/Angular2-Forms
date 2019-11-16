import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Template driven forms';

  @ViewChild('contactForm',null) contactForm: NgForm;

  contact:contact;

  ngOnInit() {

    this.contact = { 
      firstname:"",
      lastname:"",
      gender:"male",
      isToc:true,
      email:"",
    };

  }

  onSubmit() {
    console.log(this.contactForm.value);
  }



}


export class contact {
  firstname:string;
  lastname:string;
  gender:string;
  isToc:boolean;
  email:string;
} 



