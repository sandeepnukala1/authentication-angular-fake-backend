import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhesLoginComponent } from './bhes-login.component';

describe('BhesLoginComponent', () => {
  let component: BhesLoginComponent;
  let fixture: ComponentFixture<BhesLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhesLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BhesLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
