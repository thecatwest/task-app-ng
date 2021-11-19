import { Component } from '@angular/core';

// component declaration
@Component({
// selector is whatever the html tag is that you'll use to embed component
// bc this is the root component, is being embedded in app-root in html file
  selector: 'app-root',
  // html file that you're using
  templateUrl: './app.component.html',
  // your style/css file; can have more than one
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // class is where you add any properties and methods of the component
  // it's suggested to add types to properties and functions
  // moved the title from app-components.ts and added to header-component.ts
}
