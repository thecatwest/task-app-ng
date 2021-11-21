import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  // when working with forms, you'll want to add into the component class a property for each field
  text!: string;
  day!: string;
  reminder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit()  {
    if(!this.text) {
      alert('Please add a task');
      return;
    }

    // submit new task data to server through service in parent component (tasks.component.ts)
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    // TODO - emit event (must pull in Output and EventEmitter above)
    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;

  }

}
