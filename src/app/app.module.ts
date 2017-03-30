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

//Global
import { SplitNumberPipe } from './global/pipes/pipes';
import { HttpClient } from './global/http.client';
import { AuthService } from './global/auth/auth.service';

//Shared
import { ToolbarComponent, ToolbarDialogComponent } from './shared/toolbar/toolbar.component';

//Components
import { LoginComponent } from './core/login/login.component';
import { HomeComponent } from './core/home/home.component';
import { AddProjectComponent, Add01Component, Add02Component, Add03Component } from './core/add-project/add-project';

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
    SplitNumberPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    Angular2TokenService,
    HttpClient,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
