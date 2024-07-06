import { Component } from '@angular/core';
import { of, from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'rxjs-course';
  constructor() {
    const users = [
      { id: '1', name: 'Suvam', age: 33 },
      { id: '2', name: 'Bahni', age: 28 },
      { id: '3', name: 'Satyaki', age: 1 },
    ];

    const users$ = of(users);
    const bodyClick$ = fromEvent(document, 'click');

    users$.subscribe((data) => console.log('user data', data));

    bodyClick$.subscribe((event)=>{
      console.log('event', event);
    })
  }
}
