import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { FormUIComponent } from './components/form-ui/form-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    FormComponentComponent,
    FormUIComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
