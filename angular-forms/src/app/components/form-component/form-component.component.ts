import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder}  from '@angular/forms'
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder:FormBuilder) {    
    this.builForm();
   }

  ngOnInit(): void {
  }

  private builForm(){
    this.form = this.formBuilder.group({
      name: ['',[Validators.required]],
      date: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      text: ['',[Validators.required,Validators.minLength(10)]],
      category: ['',[Validators.required]],
      gender:['',[Validators.required]]
    });

    /* this.form.valueChanges
    .pipe(debounceTime(500))
    .subscribe(value =>{
      console.log(value);
    }); */
  }

  save(event:Event){
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);      
    }else{
      this.form.markAllAsTouched();
    }
  }

get textField(){
  return this.form.get('text');
}
get nameField(){
  return this.form.get('name');
}

get emailField(){
  return this.form.get('email');
}

}
