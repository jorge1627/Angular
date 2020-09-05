import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-ui',
  templateUrl: './form-ui.component.html',
  styleUrls: ['./form-ui.component.css']
})
export class FormUIComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.builForm();
   }

  ngOnInit(): void {
  }

  private builForm(){
    this.form = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]]
    });
  }

  save(event:Event){
    event.preventDefault();
    console.log(this.form.value);
  }

}
