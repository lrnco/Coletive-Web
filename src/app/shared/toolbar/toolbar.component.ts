import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

//Main Toolbar
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

//Toolbar Dialog
@Component({
  selector: 'cc-toolbar-dialog',
  template: `
    <md-toolbar>
      <md-icon (click)="returnNav()" [color]="iconColor">{{ icon }}</md-icon>
      <md-icon *ngIf="!title" svgIcon="coletive"></md-icon>
      <div *ngIf="title" [ngClass]="{'primary': color == 'primary'}">{{ title }}</div>
    </md-toolbar>
`
})
export class ToolbarDialogComponent {

  @Input() icon:string = 'arrow_back';
  @Input() iconColor:string = 'accent';
  @Input() color = '';
  @Input() title:string;

  constructor(private router: Router) { }

  // Retorna para página anterior (Home, por enquanto!);
  returnNav() {
    this.router.navigate(['']);
  }

}
