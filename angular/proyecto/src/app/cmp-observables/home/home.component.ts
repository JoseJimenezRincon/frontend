import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'
import { Subscription } from 'rxjs/Subscription';
import { Observer } from 'rxjs/Observer';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  subscription2: Subscription;

  constructor() { }

  ngOnInit() {
    const misNumeros = Observable.interval(1000);
    this.subscription = misNumeros.subscribe(
      (num) => console.log(num)
    );

    const miObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('Hola');
        }, 2000);
        setTimeout(() => {
          observer.next('Adios');
        }, 5000);
        setTimeout(() => {
          observer.error('No Funciona');
        }, 10000);
      }
    );

    this.subscription2 = miObservable.subscribe(
      (dato) => console.log(dato),
      (error) => console.log('ERRRRRRROOOOOOOOOOR')
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
