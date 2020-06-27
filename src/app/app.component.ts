import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:`
  <h1>This is the markup for the App Component</h1>
  <p>this is para</p>
  `,
  styles:[
    `p{
      color:red;
    }`
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'into-angular';
}
