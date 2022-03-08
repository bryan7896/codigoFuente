import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-recovery',
  templateUrl: './account-recovery.component.html',
  styleUrls: ['./account-recovery.component.scss']
})
export class AccountRecoveryComponent implements OnInit {
  type=false;
  action ='';

  constructor() { }

  ngOnInit(): void {
  }

  recovery(value:string) {
    this.action = value;
  }

}
