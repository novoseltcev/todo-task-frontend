import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  private eye_sources: string[] = [
    'assets/close-eye.svg',
    'assets/open-eye.svg',
  ]
  private eye_status = 0;
  isRememberAuth: boolean = false;
  authForm = {
    login: "",
    password: "",
  }
  errorMsg: string = "";
  private name: any;

  constructor(private http: HttpService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }

  changeEye() {
    this.eye_status++;
    this.eye_status %= 2;
  }

  getEye() {
    return this.eye_sources[this.eye_status];
  }

  getPasswordType() {
    if (this.eye_status == 0) {
      return 'password';
    }
    return 'text';
  }

  auth() {
    let isValid: boolean = !(this.authForm.login === '' || this.authForm.password === '');
    this.errorMsg = (isValid) ? '' : 'required fields are not filled';
    if (isValid) {
      this.http.login(this.authForm).then(

      ).catch(

      );
    }
  }
}
