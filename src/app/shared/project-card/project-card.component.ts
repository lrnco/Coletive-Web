import { Component, OnInit, Input } from '@angular/core';

// import { Task } from '../../core/models/task';
// import { Project } from '../../core/models/project';
import { AppSettings } from '../../global/app.settings';

@Component({
  selector: 'cc-project-card',
  template: `
    <span class="title">{{ project.name }}</span>
    <hr>
    <div class="task" *ngFor="let task of project.tasks; let i = index;">
      <md-chip-list><a *ngFor="let label of task.labels" href="{{ label }}" class="tag-{{ label | slugify }}"><md-chip>{{ label }}</md-chip></a></md-chip-list>
      <p>{{ task.name }}</p>
      <img *ngIf="task.image" [src]="task.image" [alt]="task.description"/>
      <cc-share [url]="fullTaskUrl(task)" [title]="project.name + ' - ' + task.name"></cc-share>
    </div>
  `,
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project:{};

  constructor() { }

  ngOnInit() {
  }

  fullTaskUrl(task: any) {
    try {
      return task.fullUrl(this.project, AppSettings.VIEW_ENDPOINT);
    } catch (ex) {
      console.log(ex);
      return 'http://google.com';
    }
  }

}
