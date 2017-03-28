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
  title:string = 'Adicionar projeto';
  color:string = '';
  loading:boolean = false;

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
