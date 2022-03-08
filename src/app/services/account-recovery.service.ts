import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {SiteKeyResponse, ResultContainer} from '../models/scf.types'
@Injectable({
  providedIn: 'root'
})
export class AccountRecoveryService {
  api_url = environment.api_url;
  options = {noAuth: true}
  params = {};
  constructor(private http: HttpClient) { }

 async getSiteKey():Promise<SiteKeyResponse>{
    // @ts-ignore
    return await this.http.get<SiteKeyResponse>(`${this.api_url}/captcha/site/key`, this.params, this.options).toPromise();
  }

 async resetUsername(data:any): Promise<ResultContainer> {
    // @ts-ignore
    return await this.http.post(`${this.api_url}/account/reset/username`, data, this.params, this.options).toPromise()
  }

  resetPassword() {

  }

}
