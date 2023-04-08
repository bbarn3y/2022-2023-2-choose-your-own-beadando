import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.less']
})
export class TaskComponent implements OnInit {
  @Input() configuration!: { subTasks: any };
  @Input() description!: string;
  @Input() imageUrl!: string;
  @Input() selected: boolean = false;
  @Input() story!: string;
  @Input() tasks!: { text: string; xp: number }[];

  @Output() thisWayBraveAdventurer: EventEmitter<void> = new EventEmitter<void>();

  @HostBinding('class') get class() {
    return Object.values(this.configuration.subTasks).some((subTask) => subTask) ? '' : 'unimplemented';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
