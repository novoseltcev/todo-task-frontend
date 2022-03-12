import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {
  recoveryForm = {
    email: ""
  };
  private name: any;
  errorMsg: string = '';

  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }

  recovery() {
    if (this.recoveryForm.email !== '') {
      this.http.sendRecoveryEmail(this.recoveryForm).catch(
        error => {
          console.log(error)
          this.errorMsg = error;
        }
      );
    }
  }

}
