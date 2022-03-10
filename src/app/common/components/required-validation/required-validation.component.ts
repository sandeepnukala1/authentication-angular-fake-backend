import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-required-validation',
  templateUrl: './required-validation.component.html',
  styleUrls: ['./required-validation.component.scss']
})
export class RequiredValidationComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() formControlKey: string;

  constructor() { }

  ngOnInit(): void {
  }

}
