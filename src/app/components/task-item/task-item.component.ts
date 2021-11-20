// pass in Input to pass in task item below in class export
import { Component, OnInit, Input } from '@angular/core';
// import task
import { Task } from '../../Task';
// import font awesome icons for delete icon
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
