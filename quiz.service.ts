import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class QuizService {
  get(url:string){
    return this.http.get(url).map(res => res.text().length > 0 ? res.json() : null);
  }
  
  getAll() {
    return [
    
      { id: 'assets/data/designPatterns.json', name: 'Design Patterns' }
    ];
  }
  constructor(private http:Http ){ 
    }

    
  

}
