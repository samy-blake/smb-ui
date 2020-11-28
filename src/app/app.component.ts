import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public request: Subject<boolean> = null;


  constructor() {}

  ngOnInit() {
    this.request = new Subject<boolean>();

    setTimeout(() => this.request.next(true), 3000);
  }

  buttonAction() {
    alert('whoopwhoop');
  }
}
