import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = true;
  subscription!: Subscription;
  // runs whenever object/module is initialized
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  // life cycle method; utilized most often
  ngOnInit(): void {
  }

  // add header button click functionality here
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

}

// must embed in app.component.html
