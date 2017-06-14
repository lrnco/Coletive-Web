import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cc-share',
  template: `
    <div class="buttons">
      <md-icon (click)="openshare=!openshare">share</md-icon>
      <button *ngIf="openshare" md-raised-button="" shareButton="twitter" [sbUrl]="url" [sbTitle]="title">
        <md-icon svgIcon="facebook" color="primary" ></md-icon>
      </button>
      <a href="mailto:?subject={{title}}&body={{url}}">
        <md-icon *ngIf="openshare" color="primary">mail</md-icon>
      </a>
    </div>
    <button md-button class="participar">Participar da tarefa</button>
  `,
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  @Input() url:string;
  @Input() title:string;
  @Input() description:string;

  constructor() { }

  ngOnInit() {
  }

}
