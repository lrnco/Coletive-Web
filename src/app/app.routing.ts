import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Angular2TokenService } from 'angular2-token';

import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { HomeComponent } from './core/home/home.component';
import { AddProjectComponent, Add04Component } from './core/add-project/add-project';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'add', canActivate: [ Angular2TokenService ], children: [
      { path: '', component: AddProjectComponent },
      { path: 'sucesso/:id', component: Add04Component }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRouting { }
