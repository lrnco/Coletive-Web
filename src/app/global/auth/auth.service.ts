import { Injectable } from '@angular/core';
import { BehaviorSubject }    from 'rxjs/BehaviorSubject';

import { Angular2TokenService } from 'angular2-token';
import { AppSettings } from '../app.settings';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class AuthService {
  private userIsLoggedSource = new BehaviorSubject<boolean>(false);
  private userDataSource = new BehaviorSubject<any>(null);

  // Observable streams
  userIsLogged$ = this.userIsLoggedSource.asObservable();
  userData$ = this.userDataSource.asObservable();

  constructor(private _tokenService: Angular2TokenService) {
    console.log("Token Service component initialized ...");
    this.userIsLoggedSource.next(false);
    this._tokenService.init({
      apiBase: AppSettings.API_ENDPOINT,
      oAuthBase: AppSettings.API_ENDPOINT,
      signInRedirect: '/login',
      signOutFailedValidate: true,
      oAuthPaths: {
        // facebook: 'auth/facebook',
        // google_oauth2:   'auth/google_oauth2',
        trello: '/auth/trello'
      }
    });
  }

  isLogged() : boolean {
    return this._tokenService.userSignedIn();
  }

  checkUser() {
    var newData = this._tokenService.currentUserData;
    var hasLogged = newData != null;
    if (this.userDataSource.getValue() != newData)
      this.userDataSource.next(newData);

    if (hasLogged != this.userIsLoggedSource.getValue())
      this.userIsLoggedSource.next(hasLogged);
  }

  logInWithOAuth(provider: string, sucessCallback?: (userData:any) => void) {
    console.log('logInWithOAuth');
    var appComponent = this;
    return this._tokenService.signInOAuth(provider)
      .subscribe(
        function(res) {
          console.log(res);
          appComponent.userIsLoggedSource.next(res != null);
          appComponent.userDataSource.next(res);

          if (sucessCallback) {
            sucessCallback(res);
          }
        },
        error =>    console.log(error)
      );
  }

  loginWithTrello(sucessCallback?: (userData:any) => void) {
    console.log('logInWithTrello 2');
    return this.logInWithOAuth('trello', sucessCallback);
  }

  logOut(sucessCallback?: () => void, errorCallback?: (error:any) => void) {
      var appComponent = this;
      this._tokenService.signOut().subscribe(
        function(res) {
          appComponent.userIsLoggedSource.next(false);
          appComponent.userDataSource.next(null);

          if (sucessCallback) {
            sucessCallback();
          }
        },
        function(error) {
          if (errorCallback) {
            errorCallback(error);
          }
        }
      );
  }
}