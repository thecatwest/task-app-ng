import { Injectable } from '@angular/core';
// import html client
import { HttpClient, HttpHeaders } from '@angular/common/http';
// to make an observable, import
import { Observable } from 'rxjs';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // add api url property
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http:HttpClient) { }

  // create method to get tasks
  getTasks(): Observable<Task[]> {
    // this.http comes from the url property above; could be named anything, but used http in this case
    return this.http.get<Task[]>(this.apiUrl);
  };

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  };

  // pass in url and task bc we are sending data
  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  };
};
