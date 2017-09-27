import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
hideDiv:boolean;
  constructor() { 

  }
  start(){
    this.hideDiv=true;
  }

  ngOnInit() {
    
  }

}
