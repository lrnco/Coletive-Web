import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Subject} from "rxjs/Subject";
// import 'rxjs/add/operator/just';

@Component({
  selector: 'cc-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddProjectComponent implements OnInit {

  model:any = { project:null, list:null, description: null, aditionalInfo: null};
  activeTab:number = 0;
  loading:boolean = false;
  helpOpened:boolean = false;

  projects = [
     {title: 'Nome do projeto nome do projeto 1 ...', team: 'Nome to Time Incrível...'},
     {title: 'Nome do projeto nome do projeto 2 ...', team: 'Nome to Time Incrível...'},
     {title: 'Nome do projeto nome do projeto 3 ...', team: 'Nome to Time Incrível...'},
     {title: 'Nome do projeto nome do projeto 4 ...', team: 'Nome to Time Incrível...'}
  ];
  lists = [ 'Backlog', 'TODO', 'Doing', 'Done', 'Publicado', 'Stories' ];

  constructor() { }

  ngOnInit() {
    // if (this.activeTab == 1) this.title = 'Escolher a lista de tarefas';
  }

  answer(e) {
    var key = Object.keys(e);
    this.model[key[0]] = e[key[0]];
  }

  submit() {
    this.loading = true;
    console.log(this.model);
    alert('Enviado: ' + this.model.project.title);
  }

}
