import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'cc-icon-set',
  template: '',
  encapsulation: ViewEncapsulation.None,
})
export class IconSetComponent {

  constructor(mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    mdIconRegistry
        .addSvgIcon('coletive', sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/coletive.svg'))
        .addSvgIcon('coletive_icon', sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/coletive_icon.svg'))
        .addSvgIcon('trello', sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/trello.svg'))
        .addSvgIcon('select-project', sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/select-project.svg'))
  }

}
