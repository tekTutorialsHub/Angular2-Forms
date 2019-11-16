import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl, EmailValidator } from '@angular/forms'


@Component({
  templateUrl: './reactive.component.html',
})
export class ReactiveComponent implements OnInit {

  title = 'Reactive Forms';

  middleName: FormControl;

  reactiveForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl(''),
    email: new FormControl(''),
    address: new FormGroup({
      address: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
    })
  })

  ngOnInit() {

    // this.reactiveForm.valueChanges.subscribe(x => {
    //   console.log(x);
    // })

    // this.reactiveForm.get("address").valueChanges.subscribe(x => {
    //   console.log(x);
    // })


    this.reactiveForm.statusChanges.subscribe(x => {
      //console.log('Form level status change')
      //console.log(x);
    })

    this.reactiveForm.get("address").statusChanges.subscribe(x => {
      //console.log('address level status change')
      //console.log(x);
    })

    this.reactiveForm.get("address").setValidators([addressValidator]);


    //this.reactiveForm.get("address").clearValidators();
  }



  onSubmit() {


    console.log(this.reactiveForm.value);
  }


  addControl() {
    this.middleName = new FormControl('', [Validators.required]);
    this.reactiveForm.addControl("middleName", this.middleName);

  }

  registerControl() {
    this.middleName = new FormControl('', [Validators.required]);
    this.reactiveForm.addControl("middleName", this.middleName);
  }

  removeControl() {
    this.reactiveForm.removeControl("middleName");
  }

  setControl() {
    this.middleName = new FormControl('test', [Validators.required]);
    this.reactiveForm.setControl("middleName", this.middleName);
  }

  containsControl() {
    console.log(this.reactiveForm.contains("middleName"));
  }




  setDefault() {

    
    this.reactiveForm.setValue({
      firstname: "",
      lastname: "",
      email: "",
      address: {
        address: "",
        city: "",
        state: "",
      }
    })
  }


  setValue() {

    this.reactiveForm.setValue({
      firstname: "Sachin",
      lastname: "Tendulakr",
      email: "sachin@gmail.com",
      address: {
        address: "19-A, Perry Cross Road, Bandra (West)",
        city: "Mumbai",
        state: "Maharatsra",
      }
    })
  }

  setAddress() {
    this.reactiveForm.get("address").setValue({
        address: "19-A, Perry Cross Road, Bandra (West)",
        city: "Mumbai",
        state: "Maharatsra",
      })
  }

  patchValue() {

    this.reactiveForm.patchValue({
      email: "sachin@gmail.com",
      address: {
        state: "Maharatsra",
      }
    })
  }



 


  markFormAsTouched() {
    this.reactiveForm.markAsTouched();
  }

  markCityAsTouched() {
    this.reactiveForm.get("address").get("city").markAsTouched({onlySelf:false});
  }

  markAddressAsTouched() {
    this.reactiveForm.get("address").markAsTouched({onlySelf:false});
  }

  markAllAddressTouched() {
    this.reactiveForm.get("address").markAllAsTouched();
  }

  markCityAsUnTouched() {
    this.reactiveForm.get("address").get("city").markAsUntouched({onlySelf:false});
  }

  markAddressAsUnTouched() {
    this.reactiveForm.get("address").markAsUntouched({onlySelf:false});
  }


  markFormAsDirty() {
    this.reactiveForm.markAsDirty();
  }
  markFormAsPristine() {
    this.reactiveForm.markAsPristine();
  }

  markCityAsDirty() {
    this.reactiveForm.get("address").get("city").markAsDirty({onlySelf:false});
  }

  markAddressAsDirty() {
    this.reactiveForm.get("address").markAsDirty({onlySelf:false});
  }

  markCityAsPristine() {
    this.reactiveForm.get("address").get("city").markAsPristine({onlySelf:false});
  }

  markAddressAsPristine() {
    this.reactiveForm.get("address").markAsPristine({onlySelf:false});
  }


  markFormAsPendng() {
    this.reactiveForm.markAsPending();
  }

  markAddressAsPendng() {
    this.reactiveForm.get("address").markAsPending({emitEvent:false});
  }




  disableFirstName() {
    this.reactiveForm.get("firstname").disable();
  }

  enableFirstName() {
    this.reactiveForm.get("firstname").enable();
  }


  enableAll() {
    this.reactiveForm.enable();
  }

  disableAddress() {
    this.reactiveForm.get("address").disable();
  }

  disableCity() {
    this.reactiveForm.get("address").get("city").disable();
  }


  disableAll() {

    this.reactiveForm.disable();

    // this.reactiveForm.get("firstname").disable();
    // this.reactiveForm.get("lastname").disable();
    // this.reactiveForm.get("email").disable();
    // this.reactiveForm.get("address").disable();

    
  }


  setAddressError(){
    this.reactiveForm.get("address").setErrors( {customerror:'custom error'});
    console.log(this.reactiveForm.getError("address"));
    console.log(this.reactiveForm.hasError("address"));
  }



}

export const addressValidator = (control: AbstractControl): {[key: string]: boolean} => {
  const city = control.get('city').value;
  const state = control.get('state').value;
  console.log(control.value);
  if (city=="" && state=="") {
    return { address:false };
  }
  return null;
};



