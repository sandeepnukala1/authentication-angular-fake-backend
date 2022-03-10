import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-bhes-login',
  templateUrl: './bhes-login.component.html',
  styleUrls: ['./bhes-login.component.scss']
})
export class BhesLoginComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private alertService: AlertService) {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  submit() {
    this.authenticationService.login(this.form.controls['username'].value, this.form.controls['password'].value).subscribe(resp => {
      if (resp && resp.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(resp));
        this.authenticationService.setCurrentUserLoggedIn(resp);
        this.router.navigateByUrl('/');
    }
    }, 
    (error) => {
      this.alertService.error(error);
      console.log(error)
    })
  }
  ngOnInit(): void {
  }

}
