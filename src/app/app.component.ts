import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'into-angular';
  counter=0;
  classToSet="positive"

  onCounterChange(buttonType:string){
    console.log(buttonType)
    buttonType === 'INC' ? this.counter++ : this.counter--;
    this.classToSet=this.counter >= 0 ? 'positive' : 'negative';
  }

}
