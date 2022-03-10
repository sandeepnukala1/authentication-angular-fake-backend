import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from './../../../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
      this.subscription = this.alertService.getAlert()
          .subscribe((message:any) => {
              switch (message && message.type) {
                  case 'success':
                      message.cssClass = 'alert-success';
                      break;
                  case 'error':
                      message.cssClass = 'alert-fail';
                      break;
              }

              this.message = message;
          });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  clear() {
    this.alertService.clear();
  }
}
