import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUIComponent } from './form-ui.component';

describe('FormUIComponent', () => {
  let component: FormUIComponent;
  let fixture: ComponentFixture<FormUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
