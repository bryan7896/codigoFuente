import { Component, OnInit } from '@angular/core';
import { DEFAULT_LANGUAGE_CODE } from 'src/app/constans/languages.constants';
import { Language } from 'src/app/models/scf.types';
import { LanguagesService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  public currentLanguage = { code: DEFAULT_LANGUAGE_CODE, name: 'English' };
  public languages: Language[] = [];
  public languageSelected: string = '';

  constructor(private core_service: LanguagesService) { }

  ngOnInit(): void {
    this.core_service.prefetchLanguages().then((response) => {
      this.languages = response;
    });
  }

  public getFlagClass(code: string): string {
    return `flag-icon flag-icon-${code.split('-')[1].toLowerCase()}`;
  }

  public changeLanguage(language: Language) {
    this.currentLanguage = language;
  }

}
