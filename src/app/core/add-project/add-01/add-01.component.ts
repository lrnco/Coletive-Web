import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cc-add-01',
  templateUrl: './add-01.component.html'
})
export class Add01Component implements OnInit {

  select:any;
  @Output() selected = new EventEmitter();
  @Input() projects;

  constructor() { }

  ngOnInit() {
    // this.projects = null; // <-- Para testar, caso não tenha projects cadastrados no Trello
  }

  sendSelected(p) {
    this.select = p;
    this.selected.emit({project: p});
  }

  addTrello() {

  }

}
