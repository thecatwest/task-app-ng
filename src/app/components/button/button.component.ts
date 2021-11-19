// pass in Input
// pass in Output and EventEmitter to use event emitter to create individualized onclick events for each button
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // had to add ! after variable bc Angular in strict mode does not like that a member variable is not defined before being used
  // tells the compiler that although variable is not defined at compile time, will be defined at run-time
  @Input() text!: string;
  @Input() color!: string;
  // add event emitter for individual reusable button click event here
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // add onclick event here
  onClick() {
    this.btnClick.emit();
  }

}

// embed into header
