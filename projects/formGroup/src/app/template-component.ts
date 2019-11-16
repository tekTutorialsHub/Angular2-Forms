import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';

@Component({
  templateUrl: './template.component.html',
})
export class TemplateComponent implements OnInit {

  title = 'Template driven forms';


  @ViewChild('templateForm', null) templateForm: NgForm;

  contact: contact;


  ngOnInit() {
  }

  onSubmit() {
    console.log(this.templateForm.value);
  }
  

}



export class contact {
  firstname: string;
  lastname: string;
  email: string;
  address : {
    address:string
    city:string
    state:string
  }
}





