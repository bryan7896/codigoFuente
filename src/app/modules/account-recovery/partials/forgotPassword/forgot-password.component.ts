import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  fg!:FormGroup;
  capcha!:string;
  constructor(
    private fb: FormBuilder,

  ) {

  }

  ngOnInit(): void {
    this.fg = this.fb.group({
      email:['',Validators.required],
      recaptcha: ['', Validators.required]
    });
  }
  resolved(captchaResponse:string) {
    this.capcha = captchaResponse;
    console.log(this.capcha)
  }

  errored($event: any) {
    console.warn(`reCAPTCHA error encountered`);
  }

}
