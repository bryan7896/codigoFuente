import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forgot-username',
  templateUrl: './forgot-username.component.html',
  styleUrls: ['./forgot-username.component.scss']
})
export class ForgotUsernameComponent implements OnInit {
  fg!:FormGroup;
  capcha!:string;
  constructor(
    private fb: FormBuilder,

  ) {

  }

  ngOnInit(): void {
    this.fg = this.fb.group({
      username:['',Validators.required],
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
