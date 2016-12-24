import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})


export class AppComponent
{
    
onSubmit(myform) {
  console.log(myform);
}
}


/*
value:any;

onSubmit(myForm) {
  this.value=myForm.value;
  console.log(myForm.value);
*/