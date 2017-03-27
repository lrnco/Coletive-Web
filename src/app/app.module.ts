import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { IconSetComponent } from './shared/icons/icon-set.component';

import { ToolbarComponent, ToolbarDialogComponent } from './shared/toolbar/toolbar.component';
import { LoginComponent } from './core/login/login.component';
import { HomeComponent } from './core/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    IconSetComponent,
    ToolbarComponent,
    ToolbarDialogComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
