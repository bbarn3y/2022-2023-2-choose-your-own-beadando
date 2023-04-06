import { Component, OnInit } from '@angular/core';
import {Task} from '../_interfaces/task';
import {tasks} from "src/app/configuration/tasks";

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.less']
})
export class NavigatorComponent implements OnInit {

  currentIndex: number = 0;
  selectedTask?: 'A' | 'B';
  tasks = tasks;
  constructor() {

  }

  ngOnInit(): void {
  }

}
