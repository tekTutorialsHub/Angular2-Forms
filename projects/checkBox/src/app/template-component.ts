import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  templateUrl: './template.component.html',
})
export class TemplateComponent implements OnInit {
  title = 'CheckBox in Template driven forms';

  @ViewChild('templateForm',null) templateForm: NgForm;

  isMarried:boolean;

  ngOnInit() {

    this.templateForm.control.get("isMarried").valueChanges.subscribe(
      isMarried => {  this.isMarriedChanged(); })

  }

  isMarriedChanged() {
    console.log('isMarried changed to :' + this.templateForm.control.get("isMarried").value);
  }

  onSubmit() {
    console.log(this.templateForm.value);
  }

}






