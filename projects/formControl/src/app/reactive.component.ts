import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl } from '@angular/forms'


@Component({
  templateUrl: './reactive.component.html',
})
export class ReactiveComponent implements OnInit {

  title = 'Reactive Forms';
  fNameChange;

  reactiveForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl(),
    email: new FormControl(),

  })

  onSubmit() {
    console.log(this.reactiveForm.value);
  }

  ngOnInit() {
    this.setDefault();

    this.fNameChange = this.reactiveForm.get("firstname").valueChanges.subscribe(x => {
      console.log(x);
    })

    this.reactiveForm.get("firstname").statusChanges.subscribe(x => {
      console.log(x);
    })

  }

  clearValidation() {
    this.reactiveForm.get("firstname").clearValidators();
    this.reactiveForm.get("firstname").updateValueAndValidity();
  }

  setValidator() {
    this.reactiveForm.get("firstname").setValidators([Validators.required, Validators.minLength(5)]);
    this.reactiveForm.get("firstname").updateValueAndValidity();
  }

  setErrors() {

    this.reactiveForm.get("firstname").setErrors({ customerror: 'custom error' });

  }

 


  getErrors() {

    const controlErrors: ValidationErrors = this.reactiveForm.get("firstname").errors;
    if (controlErrors) {
      Object.keys(controlErrors).forEach(keyError => {
        console.log("firtname " + ' ' + keyError);
      });
    }

    // console.log('getError')
    // Object.keys(this.reactiveForm.controls).forEach(key => {

    //   const controlErrors: ValidationErrors = this.reactiveForm.get(key).errors;
    //   if (controlErrors) {
    //     Object.keys(controlErrors).forEach(keyError => {
    //       console.log(key+ ' '+keyError);
    //     });
    //   }
    // })


  }

  getError() {
    console.log(this.reactiveForm.getError("firstname"));
    
  }
  hasError() {
    console.log(this.reactiveForm.hasError("firstname"));
    
  }


  getFormValidationErrors(controls: FormGroupControls): AllValidationErrors[] {
    let errors: AllValidationErrors[] = [];

    Object.keys(controls).forEach(key => {
      const control = controls[key];
      if (control instanceof FormGroup) {
        errors = errors.concat(this.getFormValidationErrors(control.controls));
      }
      const controlErrors: ValidationErrors = controls[key].errors;
      if (controlErrors !== null) {
        Object.keys(controlErrors).forEach(keyError => {
          errors.push({
            control_name: key,
            error_name: keyError,
            error_value: controlErrors[keyError]
          });
        });
      }
    });
    return errors;
  }




  setDefault() {

    let contact = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",

    };

    this.reactiveForm.setValue(contact);
  }

  setValue() {

    let contact = {
      firstname: "Rahul",
      lastname: "Dravid",
      email: "rahul@gmail.com",

    };

    this.reactiveForm.setValue(contact);
  }

  setEmail() {

    this.reactiveForm.get("email").setValue("sachin.tendulakar@gmail.com");

  };



  patchName() {
    let contact = {
      firstname: "Rahul",
      lastname: "Dravid",
    }

    this.reactiveForm.patchValue(contact);

  }

  reset() {
    this.reactiveForm.get("firstname").reset('test');
  }


}



export interface AllValidationErrors {
  control_name: string;
  error_name: string;
  error_value: any;
}

export interface FormGroupControls {
  [key: string]: AbstractControl;
}
