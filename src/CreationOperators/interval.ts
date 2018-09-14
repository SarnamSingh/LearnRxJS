import { interval } from "rxjs";


const intervalObservable$ = interval(1000);
const intervalSubscription = intervalObservable$.subscribe((data)=>{
    console.log(data);
});

setTimeout(()=>{
    intervalSubscription.unsubscribe();
},20000);