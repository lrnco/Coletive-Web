import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cc-project-card',
  template: `
    <span class="title">{{ project.title }}</span>
    <hr>
    <div class="task" *ngFor="let task of project.tasks; let i = index;">
      <md-chip-list><a *ngFor="let tag of task.tags" href="{{ tag }}" class="tag-{{ tag | slugify }}"><md-chip>{{ tag }}</md-chip></a></md-chip-list>
      <p>{{ task.title }}</p>
      <img *ngIf="task.image" [src]="task.image" [alt]="task.title"/>
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
