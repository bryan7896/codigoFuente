import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public termsAndConditions: string = 'www.ingwb.com/legal/terms-conditions';
  public legalNotice: string = 'k2pwn5z1.openweb.bbva/html/document/gscf/GSCF_Legal_notice_and_Terms_of_use.docx.pdf';
  public dataProtection: string = 'k2pwn5z1.openweb.bbva/html/document/gscf/GSCF_Supplier_data_protection.pdf';
  public customerService: string = 'k2pwn5z1.openweb.bbva/html/document/gscf/GSCF_Support.pdf';
  public cookieStatement: string = 'www.ingwb.com/legal/cookie-statement';
  public privacyStatement: string = 'www.ingwb.com/rules-regulations/privacy-statements';

  constructor() { }

  ngOnInit(): void {
  }

}
