import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }   from 'rxjs/Subscription';

import { AuthService } from '../../global/auth/auth.service';

@Component({
  selector: 'cc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  returnUrl: string;
  private subParams: any

  constructor(private router: Router, private route: ActivatedRoute,
    private _authService: AuthService) {
  }

  ngOnInit() {
    this.subParams = this.route.queryParams.subscribe(params => {
       this.returnUrl = params['returnUrl'];
    });

    this._authService.logOut();
  }

  ngOnDestroy() {
    this.subParams.unsubscribe();
  }

  logInWithTrello() {
    var component = this;

    this._authService.loginWithTrello(function(userData) {
      var returnRoute = localStorage.getItem('redirectTo');
      if (returnRoute) {
        localStorage.removeItem('redirectTo');
      } else {
        returnRoute = component.returnUrl ? component.returnUrl : '/home';
      }
      component.router.navigateByUrl(returnRoute);
    });
  }
}
