import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  counter:number = 0;
  @Output() sendNumber = new EventEmitter<number>();
  theInterval = null;

  constructor() { }

  ngOnInit(): void {

  }

  startCounter() {
    this.theInterval = setInterval(() => {
      this.counter++;
      this.sendNumber.emit(this.counter);
    }, 1000);
  }

  stopCounter() {
    clearInterval(this.theInterval);
  }

}
