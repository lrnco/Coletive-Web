import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Label } from '../models/label';
import { ProjectService } from '../services/project.service';
import { LabelService } from '../services/label.service';

@Component({
  selector: 'cc-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  query:string;
  labels:string[];
  filterLabels:Label[];

  constructor(private router: Router,
    private _projectService: ProjectService,
    private _labelService: LabelService){
    var lastParams = _projectService.getLastListParams();
    if (lastParams) {
      this.query = lastParams.query;
      if (lastParams.labels) {
        this.labels = lastParams.labels;
      } else {
        this.labels = [];
      }
    } else {
      this.labels = [];
    }
  }

  ngOnInit() {
    var component = this;
    component._labelService.list().then((result) => {
      component.filterLabels = result;
    });
  }

  isSelected(label:Label) {
    return (this.labels.includes(label.name));
  }

  toggleLabel(label:Label) {
    if (this.isSelected(label)) {
      var index = this.labels.indexOf(label.name);
      this.labels.splice(index, 1);
    } else {
      this.labels.push(label.name);
    }
  }

  submitSearch() {
    if (this.labels.length > 0 || this.query) {
      let params:any = {};
      if (this.labels.length > 0) {
        params.labels = "[" + this.labels.join(',') + "]";
      }
      if (this.query) {
        params.query = this.query;
      }
      this.router.navigate([''], {queryParams: params} );
    } else {
        this.router.navigate(['']);
    }
  }

}
