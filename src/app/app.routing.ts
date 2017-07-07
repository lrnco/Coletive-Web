import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Angular2TokenService } from 'angular2-token';

import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { HomeComponent } from './core/home/home.component';
import { FilterComponent } from './core/home/filter.component';
import { AddProjectComponent, Add04Component } from './core/add-project/add-project';
import { ProjectComponent } from './views/project/project.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'filter', component: FilterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add', canActivate: [ Angular2TokenService ], children: [
      { path: '', component: AddProjectComponent },
      { path: 'sucesso/:id', component: Add04Component }
  ]},
  { path: 'project/:id', component: ProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRouting { }
