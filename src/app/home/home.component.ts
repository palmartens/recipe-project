import { Component, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

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
        if (count === 5) {
          observer.complete();
        }
        if (count >3) {
          observer.error(new Error('Count is greater than 3'));
        }
        count++;
      },1000);      
     });

    //observable operator definition:
     

    this.firstObsSubscription = customIntervalObservable.pipe(filter( (data) => {      
      return data < 2;
    })).pipe(map( (data: number) => {      
      return 'Round ' + (data + 1);
    })).subscribe((data) => {  
      console.log('data:',data);
    }, (error) => {console.warn("ERROR", error.message)},() => {console.log("Completed, now cleanup. Unsubscribe not necessary anymore")});

  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();

  }

}
