import { Component } from '@angular/core';

@Component({
  selector: 'cc-root',
  template: `
    <cc-toolbar></cc-toolbar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

}
