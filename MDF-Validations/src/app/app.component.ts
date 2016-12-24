import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

/* With Form Builder witht group */
export class AppComponent 
{

contactForm: FormGroup;


constructor (private fb: FormBuilder) {

  this.contactForm = this.fb.group({
      firstname: ['',[ Validators.required,Validators.minLength(10)]],
      lastname: [],
      address: this.fb.group({
        city:[],
        street: [],
        pincode: []
      })
    });

 }

onSubmit() {
     console.log(this.contactForm.value);
  }
}




/*Validators */
/*customerForm = new FormGroup({
  firstname: new FormControl('Rahul', Validators.required),
  lastname: new FormControl({value: 'Dravid', disabled: true}),
  street: new FormControl('',[ Validators.required,Validators.minLength(10)]),
  pincode: new FormControl('', Validators.compose([ Validators.required,Validators.minLength(10)]))
})*/







