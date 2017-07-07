import { Component, OnInit, Input } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { Project } from '../../core/models/project';
import { Task } from '../../core/models/task';

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
    <button *ngIf="task.current_user_participating" md-button class="ja-participa">Participando!</button>
    <button *ngIf="!task.current_user_participating" md-button class="participar" (click)="participateInTask()">Participar da tarefa</button>
  `,
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  @Input() url:string;
  @Input() title:string;
  @Input() description:string;
  @Input() project:Project;
  @Input() task:Task;

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  participateInTask() {
    var url = '/project/' + this.project.slug + '?participate_in=' + this.task.id;
    localStorage.setItem('redirectTo', url);
    this.router.navigateByUrl(url);
  }

}
