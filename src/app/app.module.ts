import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';

// Main Components
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

// UI
import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconSetComponent } from './shared/icons/icon-set.component';

//Vendor
import { ClipboardModule } from 'ngx-clipboard';
import { NgPipesModule } from 'ngx-pipes';

//Global
import { SplitNumberPipe } from './global/pipes/pipes';
import { HttpClient } from './global/http.client';
import { AuthService } from './global/auth/auth.service';

//Shared
import { ToolbarComponent, ToolbarDialogComponent } from './shared/toolbar/toolbar.component';

//Components
import { LoginComponent } from './core/login/login.component';
import { HomeComponent } from './core/home/home.component';
import { AddProjectComponent, Add01Component, Add02Component, Add03Component, Add04Component } from './core/add-project/add-project';
import { ProjectCardComponent } from './shared/project-card/project-card.component';
import { ShareComponent } from './shared/share/share.component';

//Services
import { ProjectService } from './core/services/project.service';

@NgModule({
  declarations: [
    AppComponent,
    IconSetComponent,
    ToolbarComponent,
    ToolbarDialogComponent,
    LoginComponent,
    HomeComponent,
    AddProjectComponent,
    Add01Component,
    Add02Component,
    Add03Component,
    Add04Component,
    SplitNumberPipe,
    ProjectCardComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    MaterialModule,
    BrowserAnimationsModule,
    ClipboardModule,
    NgPipesModule
  ],
  providers: [
    Angular2TokenService,
    HttpClient,
    AuthService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
