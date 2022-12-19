import { Component, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private firstObsSubscription:  Subscription;
  
  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription = interval(100).subscribe(count => {
    //   console.log('count:',count);
    // });    
    const customIntervalObservable = Observable.create((observer) => { 
      //the observer is the listener
      let count = 0;
      setInterval(() => {        
        observer.next(count); //-> 
        count++;
      },1000);      
     });

    this.firstObsSubscription = customIntervalObservable.subscribe((data) => { console.log('data:',data) });

  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();

  }

}
