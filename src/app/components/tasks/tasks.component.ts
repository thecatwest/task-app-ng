import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  // in order to use a service you have to add it as a provider into the constructor as a constructor argument
  constructor(private taskService: TaskService) {}

  // void means this particular function doesn't return anything
  ngOnInit(): void {
    // to use observables, must subscribe to them (similar to a promise)
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  // deleteTask functionality
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id ! !== task.id)));
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }
  // make sure to go to task.service.ts to update server for changes

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }
}
