import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Subject";

import { TrelloBoard } from '../models/trello_board';
import { TrelloList } from '../models/trello_list';
import { Project, ProjectInfo } from '../models/project';
import { TrelloService } from '../services/trello.service';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'cc-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ TrelloService ]
})
export class AddProjectComponent implements OnInit {

  model:any = { board:null, list:null, description: null, aditionalInfo: null};
  activeTab:number = 0;
  loading:boolean = false;
  loadingData:boolean = false;
  helpOpened:boolean = false;

  boards: TrelloBoard[];
  lists: TrelloList[];

  constructor(private router: Router,
    private trelloService: TrelloService,
    private projectService: ProjectService) { }

  ngOnInit() {
    this.loadBoards();
  }

  loadBoards() {
    var component = this;
    component.loadingData = true;
    component.trelloService.boards().then((boards) => {
      component.boards = boards;
      component.loadingData = false;
    }, error => {
      component.loadingData = false;
    });
  }

  loadLists(board_id) {
    var component = this;
    component.loadingData = true;
    component.trelloService.lists(board_id).then((lists) => {
      component.lists = lists;
      component.loadingData = false;
    }, error => {
      component.loadingData = false;
    });
  }

  answer(e) {
    var key = Object.keys(e);
    this.model[key[0]] = e[key[0]];
  }

  boardSelected(data) {
    var component = this;
    component.model.board = data.board;
    this.loadLists(component.model.board.id);
  }

  listSelected(data) {
    var component = this;
    component.model.list = data.list;
  }

  submit() {
    var project = new Project();
    project.name = this.model.board.name;
    project.description = this.model.description;
    project.extra_info = this.model.aditionalInfo;
    project.info = new ProjectInfo();
    project.info.board_id = this.model.board.id;
    project.info.todo_list_id = this.model.list.id;

    this.loading = true;
    var component = this;
    component.projectService.save(project).then((savedProject) => {
      this.loading = true;
      this.router.navigate(['add/sucesso', savedProject.id]);
    }, error => {
      this.loading = true;
      // TODO Mostrar mensagem de erro
    })
  }

}
