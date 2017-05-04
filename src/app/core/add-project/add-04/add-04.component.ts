import { Component, OnInit, OnDestroy } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { Project, ProjectInfo } from '../../models/project';
import { ProjectService } from '../../services/project.service';

import { AppSettings } from '../../../global/app.settings';

@Component({
  selector: 'cc-add-04',
  templateUrl: './add-04.component.html',
  styleUrls: ['./add-04.component.scss']
})
export class Add04Component implements OnInit, OnDestroy {

  project:Project;
  link:string;
  private sub: any;

  constructor(public snackBar: MdSnackBar,
    private route: ActivatedRoute,
    private projectService: ProjectService) { }

  copyClipboard() {
    this.snackBar.open('Link copiado!', null, { duration: 2000,});
  }

  ngOnInit() {
    var component = this;
    this.sub = this.route.params.subscribe(params => {
       var id = +params['id']; // (+) converts string 'id' to a number
       component.projectService.get(id).then(entry => {
         component.project = entry;
         component.link = entry.fullUrl(AppSettings.VIEW_ENDPOINT);
       }, error => {
         // TODO Mostrar mensagem e tirar da tela
       });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
