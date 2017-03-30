import { Component, OnInit } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { AuthService } from './global/auth/auth.service';

@Component({
  selector: 'cc-root',
  template: `
    <cc-icon-set></cc-icon-set>
    <router-outlet (onTrelloLoginRequested)="onTrelloLoginRequested($event)"></router-outlet>
  `
})
export class AppComponent implements OnInit {
  userIsLogged: boolean;
  userData: any;

  userIsLoggedSubscription : Subscription;
  userDataSubscription : Subscription;

  constructor(private _authService: AuthService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    // translate.addLangs(["en", "pt"]);
    // translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    // let browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|pt/) ? browserLang : 'en');
  }

  ngOnInit() {
    console.log("Application component initialized ...");

    this.userIsLoggedSubscription = this._authService.userIsLogged$.subscribe(
      userIsLogged => {
        this.userIsLogged = userIsLogged;
    });
    this.userDataSubscription = this._authService.userData$.subscribe(
      userData => {
        this.userData = userData;
    });
  }

  ngAfterContentChecked() {
    this._authService.checkUser();
  }
}
