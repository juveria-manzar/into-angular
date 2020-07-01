import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  message=`This is some random message`;
  constructor() { }
  getMessage(){
    return this.message
  }

  ngOnInit(): void {
  }

}
