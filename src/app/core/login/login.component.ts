import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../global/auth/auth.service';

@Component({
  selector: 'cc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private _authService: AuthService) { }

  ngOnInit() {
  }

  logInWithTrello() {
    var component = this;
    console.log('logInWithTrello');
    this._authService.loginWithTrello(function(userData) {
      component.router.navigate(['/add']);
    });
  }
}
