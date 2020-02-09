import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.setDefaultLang('uk');
    translate.use('uk');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
    console.log(this.translate.use(language));
  }
}
