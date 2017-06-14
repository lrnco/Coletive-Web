import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cc-project-card',
  template: `
    <span class="title">{{ project.name }}</span>
    <hr>
    <div class="task" *ngFor="let task of project.tasks; let i = index;">
      <md-chip-list><a *ngFor="let label of task.labels" href="{{ label }}" class="tag-{{ label | slugify }}"><md-chip>{{ label }}</md-chip></a></md-chip-list>
      <p>{{ task.name }}</p>
      <img *ngIf="task.image" [src]="task.image" [alt]="task.description"/>
      <cc-share></cc-share>
    </div>
  `,
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project:{};

  constructor() { }

  ngOnInit() {
  }

}
