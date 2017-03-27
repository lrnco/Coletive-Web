import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cc-toolbar',
  template: `
    <md-toolbar class="main-toolbar">
      <md-icon svgIcon="coletive"></md-icon>
      <md-icon color="accent">help_outline</md-icon>
    </md-toolbar>
`
})
export class ToolbarComponent {

  constructor() { }

}

@Component({
  selector: 'cc-toolbar-dialog',
  template: `
    <md-toolbar>
      <md-icon (click)="returnNav()" color="accent">clear</md-icon>
      <md-icon svgIcon="coletive"></md-icon>
    </md-toolbar>
`
})
export class ToolbarDialogComponent {

  constructor(private router: Router) { }

  // Retorna para página anterior (Home, por enquanto!);
  returnNav() {
    this.router.navigate(['']);
  }

}
