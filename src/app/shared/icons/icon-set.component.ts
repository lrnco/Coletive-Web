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
        .addSvgIcon('select', sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/select.svg'))
        .addSvgIcon('list_01', sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/list_01.svg'))
        .addSvgIcon('list_02', sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/list_02.svg'))
        .addSvgIcon('chevron_down_outline', sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/chevron_down_outline.svg'))
        .addSvgIcon('help_tab', sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/help_tab.svg'))
  }

}
