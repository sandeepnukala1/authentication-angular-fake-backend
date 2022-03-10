import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-bhes-home',
  templateUrl: './bhes-home.component.html',
  styleUrls: ['./bhes-home.component.scss']
})
export class BhesHomeComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login'])
  }

}
