import { OddComponent } from './odd/odd.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddList = [];
  evenList = []

  showCounter(counter:number) {
    if(counter % 2 == 0){
      this.evenList.push(counter);
    } else {
      this.oddList.push(counter);
    }
  }
}
