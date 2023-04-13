import { Observable } from 'rxjs';
const observable$ = new Observable<string>(subscriber => {
  subscriber.next('Felix');
  setTimeout(() => subscriber.next('Urso'),2000);
  setTimeout(() => subscriber.next('Battig'),4000);
  setTimeout(() => subscriber.next('Weber'), 6000);
});

// const observer = {
//   next: value => console.log(value)
// };

//observable$.subscribe(observer);

const subscription = observable$.subscribe(value => console.log(value));

setTimeout(() =>{
  console.log('Unsubscribe');
  subscription.unsubscribe();
}, 4000)

