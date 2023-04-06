import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavigatorComponent} from "src/app/navigator/navigator.component";
import {Task1AComponent} from "src/app/tasks/1/A/task1-a.component";
import {Task1BComponent} from "src/app/tasks/1/B/task1-b.component";
import {MainMenuComponent} from "src/app/main-menu/main-menu.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainMenuComponent
  },
  {
    path: 'tasks',
    component: NavigatorComponent,
    // children: [
    //   {
    //     path: '1',
    //     component: Task1AComponent
    //   },
    //   {
    //     path: '1B',
    //     component: Task1BComponent
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
