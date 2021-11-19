import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  // runs whenever object/module is initialized
  constructor() { }

  // life cycle method; utilized most often
  ngOnInit(): void {
  }

  // add header button click functionality here
  toggleAddTask() {
    console.log("toggle");
  }

}

// must embed in app.component.html
