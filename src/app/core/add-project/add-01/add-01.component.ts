import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cc-add-01',
  templateUrl: './add-01.component.html'
})
export class Add01Component implements OnInit {

  select:any;
  @Output() selected = new EventEmitter();
  projects = [
     {title: 'Nome do projeto nome do projeto 1 ...', team: 'Nome to Time Incrível...'},
     {title: 'Nome do projeto nome do projeto 2 ...', team: 'Nome to Time Incrível...'},
     {title: 'Nome do projeto nome do projeto 3 ...', team: 'Nome to Time Incrível...'},
     {title: 'Nome do projeto nome do projeto 4 ...', team: 'Nome to Time Incrível...'}
  ];

  constructor() { }

  ngOnInit() {
    // this.projects = null; // <-- Para testar, caso não tenha projects cadastrados no Trello
  }

  sendSelected(p) {
    this.select = p;
    this.selected.emit(p);
  }

  addTrello() {

  }

}
