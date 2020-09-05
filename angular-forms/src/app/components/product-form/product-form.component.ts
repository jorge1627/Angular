import { Component, OnInit } from '@angular/core';
import {FormControl, Validators}  from '@angular/forms'

import {debounceTime} from 'rxjs/operators'
import { pipe } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  emailControl = new FormControl('',[Validators.required,Validators.email]);
  
  constructor() {
    this.emailControl.valueChanges
    .pipe(
      debounceTime(350)
    )
    .subscribe(value => {
      console.log(value);});
   }

  ngOnInit(): void {
  }

  getEmail(event: Event){
    event.preventDefault();
    console.log(this.emailControl.value);
  }

}
