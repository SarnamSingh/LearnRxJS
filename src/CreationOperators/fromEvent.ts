import {fromEvent} from 'rxjs';

const fromEventObservable$ = fromEvent(document,'click');
const fromEventsubscription = fromEventObservable$.subscribe(()=>{
    console.log((new Date()).toLocaleTimeString());
});
// setTimeout(() => {
//     fromEventsubscription.unsubscribe();
// }, 5000);