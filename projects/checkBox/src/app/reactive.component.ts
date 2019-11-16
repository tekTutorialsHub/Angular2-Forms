import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
  templateUrl: './reactive.component.html',
})
export class ReactiveComponent implements OnInit {
  title = 'CheckBox in Template driven forms';

  reactiveForm = new FormGroup({
    isMarried: new FormControl(undefined, [Validators.required]),
  })

  ngOnInit() {

    this.reactiveForm.get("isMarried").valueChanges.subscribe(
      isMarried => {  this.isMarriedChanged(); })

  }

  isMarriedChanged() {
    console.log('isMarried changed to :' + this.reactiveForm.get("isMarried").value);
  }

  onSubmit() {
    console.log(this.reactiveForm.value);
  }



}
