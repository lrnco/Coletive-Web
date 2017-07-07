import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../global/auth/auth.service';
import { Project } from '../models/project';
import { Task } from '../models/task';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'cc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects : Project[] = null;
  private paramsSub: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private _authService: AuthService,
    private _projectService: ProjectService)
  {
  }

  ngOnInit() {
    var component = this;
    this.paramsSub = this.route.queryParams.subscribe(params => {
      component._projectService.list(params).then((result) => {
        component.projects = result;
      });
    });
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

  addProject() {
    localStorage.setItem('redirectTo', '/add');
    this.router.navigate(['add']);
  }

}
