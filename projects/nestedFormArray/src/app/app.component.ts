import { Component } from '@angular/core';
  import { FormGroup, FormArray, FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
  title = 'Nested FormArray Example Add Form Fields Dynamically';

  empForm:FormGroup;


  constructor(private fb:FormBuilder) {

    this.empForm=this.fb.group({
      employees: this.fb.array([]) ,
    })
  }


  employees(): FormArray {
    return this.empForm.get("employees") as FormArray
  }


  newEmployee(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',
      skills:this.fb.array([])
    })
  }


  addEmployee() {
    console.log("Adding a employee");
    this.employees().push(this.newEmployee());
  }


  removeEmployee(empIndex:number) {
    this.employees().removeAt(empIndex);
  }


  employeeSkills(empIndex:number) : FormArray {
    return this.employees().at(empIndex).get("skills") as FormArray
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
  }

  addEmployeeSkill(empIndex:number) {
    this.employeeSkills(empIndex).push(this.newSkill());
  }

  removeEmployeeSkill(empIndex:number,skillIndex:number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }

  onSubmit() {
    console.log(this.empForm.value);
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

