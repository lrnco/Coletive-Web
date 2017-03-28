import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cc-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddProjectComponent implements OnInit {

  model:any = {};
  activeTab = 1;

  constructor() { }

  ngOnInit() {
  }

  selectedProject(e) {
    this.model.project = e;
    console.log(this.model);
  }

  selectedList(e) {
    this.model.list = e;
    console.log(this.model);
  }

}
