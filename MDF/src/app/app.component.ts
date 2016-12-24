import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

/* With Form Builder without group  ok*/
/*export class AppComponent 
{

contactForm: FormGroup;

constructor (private fb: FormBuilder) {

  this.contactForm = this.fb.group({
      firstname: [],
      lastname: [],
      address: this.fb.group({
        street: [],
        pincode: []
      })
    });

 }

onSubmit() {
     console.log(this.customerForm.value);
  }
}*/


/* Without Form Builder , without Group */
/*export class AppComponent 
{

  customerForm = new FormGroup({
       firstname: new FormControl(),
       lastname: new FormControl(),
      })


onSubmit() {
     console.log(this.customerForm.value);
  }
}
*/

/*Validators */
/*customerForm = new FormGroup({
  firstname: new FormControl('Rahul', Validators.required),
  lastname: new FormControl({value: 'Dravid', disabled: true}),
  street: new FormControl('',[ Validators.required,Validators.minLength(10)]),
  pincode: new FormControl('', Validators.compose([ Validators.required,Validators.minLength(10)]))
})*/


/* Without Form Builder , with Group */
export class AppComponent 
{

  contactForm = new FormGroup({
       firstname: new FormControl(),
       lastname: new FormControl(),
       address: new FormGroup({
         city: new FormControl(),
         street: new FormControl(),
         pincode: new FormControl()
       })
      })

onSubmit() {
     console.log(this.contactForm.value);
  }
}



/* With Form Builder without group  ok*/
/*export class AppComponent 
{

contactForm: FormGroup;

constructor (private fb: FormBuilder) {

  this.contactForm = this.fb.group({
      firstname: [],
      lastname: [],
    });

 }

onSubmit() {
     console.log(this.contactForm.value);
  }
}*/




