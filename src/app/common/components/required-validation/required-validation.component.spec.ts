import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredValidationComponent } from './required-validation.component';

describe('RequiredValidationComponent', () => {
  let component: RequiredValidationComponent;
  let fixture: ComponentFixture<RequiredValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequiredValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
