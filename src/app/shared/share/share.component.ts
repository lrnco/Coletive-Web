import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-share',
  template: `
    <div class="buttons">
      <md-icon (click)="openshare=!openshare">share</md-icon>
      <md-icon *ngIf="openshare" svgIcon="facebook" color="primary"></md-icon>
      <md-icon *ngIf="openshare" color="primary">mail</md-icon>
    </div>
    <button md-button class="participar">Participar da tarefa</button>
  `,
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
