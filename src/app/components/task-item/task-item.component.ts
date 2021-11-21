// pass in Input to pass in task item below in class export
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  // define onDelete functionality
  onDelete(task: any) {
    this.onDeleteTask.emit(task);
  }

  // define onToggleReminder functionality
  onToggle(task: any) {
    this.onToggleReminder.emit(task);
  }
  // when emitting, must go to parent component (tasks in this case) and add it to app-task-item in tasks.comp.html

}
