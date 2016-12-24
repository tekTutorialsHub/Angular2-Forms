import { Component,AfterViewChecked, ViewChild } from '@angular/core';
import { NgForm, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})


export class AppComponent implements AfterViewChecked
{

  contactForm: NgForm;
  

  @ViewChild('myForm') currentForm: NgForm;

  formErrors = { };


  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
      if (this.currentForm === this.contactForm) { return; }
          this.contactForm = this.currentForm;
      if (this.contactForm) {
         this.contactForm.valueChanges.subscribe(data => this.onValueChanged(data));
      }
  }


  onValueChanged(data?: any) {
      if (!this.contactForm) { return; }
          const form = this.contactForm.form;
      this.checkForErrors(form);
  }

  checkForErrors(fg?:any) {
     for (let field in fg.controls) {
        if (fg.controls.hasOwnProperty(field)) {
          if (fg.controls[field].hasOwnProperty('controls')) {
            this.checkForErrors(fg.controls[field]);
          } else {
            var fc = fg.controls[field];
            
            if (fc.dirty ||fc.touched) {

              this.formErrors[field]='';

              for (let err in fc.errors) {
                  switch(err) {
                    case "required":
                      this.formErrors[field]+= 'Value is required';
                      break;
                    case "minlength":
                      var er = fc.errors[err];
                      this.formErrors[field]+= 'Value must be at least '+ er.requiredLength + ' characters long';
                      break;
                    default:
                      break;
                  }
              }
            }
          }
        }
     }
 }
  
  onSubmit(myform) {
     console.log(myform);
  }
}

