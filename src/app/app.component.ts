import { Component } from '@angular/core';

@Component({
  selector: 'cc-root',
  template: `
    <cc-icon-set></cc-icon-set>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

}
