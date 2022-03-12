import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetForm = {
    password: "", confirmPassword: "",
  };
  errorMsg: string = "";
  private eye_sources: string[] = ['assets/close-eye.svg', 'assets/open-eye.svg',]
  private eye_status = 0;
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

  reset() {
    let isValid: boolean = true;
    if (this.resetForm.password === '' && this.resetForm.confirmPassword === '') {
      this.errorMsg = 'required fields are not filled';
      isValid = false;
    }

    if (this.resetForm.password !== this.resetForm.confirmPassword) {
      this.errorMsg = 'passwords don\'t match';
      isValid = false;
    }

    if (isValid) {
      this.http.updatePassword({password: this.resetForm.password}).then(
        // TODO
      ).catch(error => {
        this.errorMsg = error.message;
        console.error('There was an error!', error);
      });
    }
  }
}
