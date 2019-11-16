import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
  templateUrl: './reactive.component.html',
})
export class ReactiveComponent implements OnInit {
  title = 'Reactive Forms';


  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

  // reactiveForm = new FormGroup({
  //   firstname: new FormControl('Sachin'),
  //   lastname: new FormControl('Tendulkar'),
  //   email: new FormControl('sachin@gmail.com'),
  //   gender: new FormControl('male'),
  //   isMarried: new FormControl(true),
  //   country: new FormControl('2'),
  //   address:new FormGroup({
  //     city: new FormControl("Mumbai"),
  //     street: new FormControl("Perry Cross Rd"),
  //     pincode:new FormControl("400050")
  //   })
  // })

  reactiveForm = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl(),
    address:new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pincode:new FormControl()
    })
  })

  onSubmit() {
    console.log(this.reactiveForm.value);
  }

  ngOnInit() {
    this.setDefault();

    this.reactiveForm.get("firstname").statusChanges.subscribe(x => {
      console.log('firstname status changes')
    })

    this.reactiveForm.get("firstname").valueChanges.subscribe(x => {
      console.log('firstname value changed')
    })

    this.reactiveForm.statusChanges.subscribe(x => {
      console.log('form status changes')
    })

    this.reactiveForm.valueChanges.subscribe(x => {
      console.log('form value changed')
    })
  }

  setDefault() {

    let contact = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2",
      address: {
        city: "Mumbai",
        street: "Perry Cross Rd",
        pincode: "400050"
      }
    };

    this.reactiveForm.setValue(contact);
  }

  setValue() {

    let contact = {
      firstname: "Rahul",
      lastname: "Dravid",
      email: "rahul@gmail.com",
      gender: "male",
      isMarried: true,
      country: "1",
      address: {
        city: "Bangalore",
        street: "Brigade Road",
        pincode: "600070"
      }
    };

    this.reactiveForm.setValue(contact);
  }

  setAddress() {

    let address= {
      city: "Bangalore",
      street: "Brigade Road",
      pincode: "600070",
    };

    this.reactiveForm.get("address").setValue(address);

  };

  setCountry() {

    this.reactiveForm.get("country").setValue("1");

  };


  patchAddress() {

    let address= {
      city: "Bangalore",
      street: "Brigade Road",
      //pincode: "600070",
      //firstname:'saurv'
    };

    this.reactiveForm.get("address").patchValue(address);
    

  }


  patchName() {
    let contact = {
      firstname: "Rahul",
      lastname: "Dravid",
    }

    this.reactiveForm.patchValue(contact);

  }

  withoutOnlySelf(){
    this.reactiveForm.get("firstname").setValue("");
  }
  withOnlySelf(){
    this.reactiveForm.get("firstname").setValue("",{onlySelf:true});
  }

  

  withouEmitEvent(){
    this.reactiveForm.get("firstname").setValue("Sachin");
  }
  withEmitEvent(){
    this.reactiveForm.get("firstname").setValue("",{emitEvent:false});
  }

  reset() {
    this.reactiveForm.reset();
  }

}

export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}