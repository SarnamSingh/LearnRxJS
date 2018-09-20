import { timer } from "rxjs";

//1# timer emits 1 value then completes
const timerObservable$ = timer(1000);
const timerSubscription = timerObservable$.subscribe((data)=>{
    console.log(data);
});
setTimeout(()=>{
timerSubscription.unsubscribe();
}, 10000);

// 2# timer emits after 1 second, then every 2 seconds
const timerWithTwoParamObservable$ = timer(1000, 2000);
const timerWithTwoParamSubscription = timerWithTwoParamObservable$.subscribe((data)=>{
    console.log(data);
});
setTimeout(()=>{
timerSubscription.unsubscribe();
}, 100000);