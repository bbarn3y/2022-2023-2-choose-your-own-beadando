import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskSelectorComponent } from './task-selector/task-selector.component';
import { TaskComponent } from './task/task.component';
import { NavigatorComponent } from './navigator/navigator.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MarkdownModule} from "ngx-markdown";
import {LayoutModule} from "@angular/cdk/layout";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { Task1AComponent } from './tasks/1/A/task1-a.component';
import { Task1BComponent } from './tasks/1/B/task1-b.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import { MainMenuComponent } from './main-menu/main-menu.component';
import {MatCardModule} from "@angular/material/card";
import { SummaryComponent } from './summary/summary.component';
import {MatDialogModule} from "@angular/material/dialog";
import { PreviewComponent } from './preview/preview.component';

const materialModules = [
  LayoutModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatListModule
]

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    NavigatorComponent,
    Task1AComponent,
    Task1BComponent,
    TaskSelectorComponent,
    MainMenuComponent,
    SummaryComponent,
    PreviewComponent
  ],
  imports: [
    ...materialModules,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot(),
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
