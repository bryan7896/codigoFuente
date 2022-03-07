import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Language } from '../models/scf.types';
import {
  DEFAULT_LANGUAGE_CODE,
  LANGUAGE_LOCAL_STORAGE_KEY,
} from '../constans/languages.constants';
import { environment as ENV } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  languages: Language[] = [];
  defaultLanguage = { code: DEFAULT_LANGUAGE_CODE, name: 'English' };
  store: Object = {};

  constructor(private http: HttpClient) {}

  // Prefetch Languages and store them
  public prefetchLanguages(): Promise<Language[]> {
    return this.http
      .get<Language[]>(`${ENV.api_url}/static/language`)
      .pipe(map((response: any) => response.data))
      .toPromise();
  }
}
