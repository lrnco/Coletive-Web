import { Component, OnInit, OnDestroy } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { Project, ProjectInfo } from '../../core/models/project';
import { ProjectService } from '../../core/services/project.service';
import { TaskService } from '../../core/services/task.service';

import { AppSettings } from '../../global/app.settings';

@Component({
  selector: 'cc-project-view',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {

  project:Project;
  task_id:Number;
  private sub: any;
  private querySub: any;

  constructor(public snackBar: MdSnackBar,
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private taskService: TaskService) { }

  copyClipboard() {
    this.snackBar.open('Link copiado!', null, { duration: 2000,});
  }

  ngOnInit() {
    var component = this;
    this.sub = this.route.params.subscribe(params => {
       var id = params['id']; // (+) converts string 'id' to a number
       component.projectService.get(id).then(entry => {
         component.project = entry;
         component.querySub = component.route.queryParams.subscribe(queryParams => {
           if (queryParams['participate_in']) {
             var participate_in_task_id = +queryParams['participate_in'];
             component.taskService.participate(participate_in_task_id).then(task => {
               if (task) {
                 task.current_user_participating = true;
                 component.project.addOrReplaceTask(task);
               }
             })
           }
         });
       }, error => {
         // TODO Mostrar mensagem e tirar da tela
       });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.querySub.unsubscribe();
  }

}
