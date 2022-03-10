import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhesHomeComponent } from './bhes-home.component';

describe('BhesHomeComponent', () => {
  let component: BhesHomeComponent;
  let fixture: ComponentFixture<BhesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BhesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
