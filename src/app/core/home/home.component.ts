import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../global/auth/auth.service';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'cc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects : Project[] = null;

  constructor(private router: Router,
    private _authService: AuthService,
    private _projectService: ProjectService)
  {
  }

  ngOnInit() {
    var component = this;
    component._projectService.list().then((result) => {
      component.projects = result;
    });
  }

  addProject() {
    localStorage.setItem('redirectTo', 'add');
    this.router.navigate(['add']);
  }

}
