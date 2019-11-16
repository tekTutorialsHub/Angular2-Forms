import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';


@Component({
  templateUrl: './template.component.html',
})
export class TemplateComponent implements OnInit, OnDestroy {

  title = 'Template driven forms';

  fNameChange;

  @ViewChild('templateForm', null) templateForm: NgForm;

  contact: contact;

  onSubmit() {
    console.log(this.templateForm.value);
  }

  ngOnInit() {

    setTimeout(() => {

      this.setDefault();

      this.fNameChange = this.templateForm.control.get("firstname").valueChanges.subscribe(x => {
        console.log(x);
      })

      this.templateForm.control.get("firstname").statusChanges.subscribe(x => {
        console.log(x);
      })

    });


  }


  setValidator() {
    this.templateForm.control.get("firstname").setValidators([Validators.required, Validators.minLength(5)]);
    this.templateForm.control.get("firstname").updateValueAndValidity();
  }

  setDefault() {

    let contact = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
    };

    this.templateForm.control.setValue(contact);




  }

  ngOnDestroy() {
    //this.fNameChange.unsubscribe();
  }


  setValue() {

    let contact = {
      firstname: "Rahul",
      lastname: "Dravid",
      email: "rahul@gmail.com",
    };

    this.templateForm.setValue(contact);
  }


  setEmail() {

    this.templateForm.control.get("email").setValue("sachin.tendulkar@gmail.com");

  };




  patchName() {
    let contact = {
      firstname: "Rahul",
      lastname: "Dravid",
    }

    this.templateForm.control.patchValue(contact);

  }

  reset() {
    this.templateForm.reset();
  }

}



export class contact {
  firstname: string;
  lastname: string;
  email: string;
}





