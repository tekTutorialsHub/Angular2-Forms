import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  templateUrl: './template.component.html',
})
export class TemplateComponent implements OnInit {

  title = 'Template driven forms';

  @ViewChild('templateForm',null) templateForm: NgForm;

  contact: contact;
  
  onSubmit() {
    console.log(this.templateForm.value);
  }

  ngOnInit() {

    setTimeout(() => {

      this.templateForm.control.get("firstname").valueChanges.subscribe(selectedValue => {
        console.log('firstname value changed')
        console.log(selectedValue)
        console.log(this.templateForm.control.get("firstname").value)
        console.log(this.templateForm.control.value)
        
        setTimeout(() => {
          console.log(this.templateForm.control.value)
        })
      })
  
      this.templateForm.control.get("address").valueChanges.subscribe(selectedValue => {
        console.log('address changed')
        console.log(selectedValue)
      })

      this.templateForm.valueChanges.subscribe(selectedValue => {
        console.log('form value changed')
        console.log(selectedValue)
      })      
      
    });




  }



  setValue() {
    let contact = {
      firstname: "Rahul",
      lastname: "Dravid",
      address: {
        city: "Bangalore",
        street: "Brigade Road",
        pincode: "600070"
      }
    };

    this.templateForm.setValue(contact);
  }

  setAddress() {
    let address= {
      city: "Bangalore",
      street: "Brigade Road",
      pincode: "600070"
    };

    this.templateForm.control.get("address").setValue(address);

  };

  setFirstname() {
    this.templateForm.control.get("firstname").setValue("Saurav")
  }


  withoutOnlySelf() {
    this.templateForm.control.get("firstname").setValue("");
  }
  withOnlySelf() {
    this.templateForm.control.get("firstname").setValue("", { onlySelf: true });
  }

  withouEmitEvent() {
    this.templateForm.control.get("firstname").setValue("Sachin");
  }
  withEmitEvent() {
    this.templateForm.control.get("firstname").setValue("", { emitEvent: false });
  }

  reset() {
    this.templateForm.reset();
  }
  
}


export class contact {
  firstname:string;
  lastname:string;
  gender:string;
  email:string;
  isMarried:boolean;
  country:string;
  address: {
    city:string;
    street:string;
    pincode:string;
  }
} 

