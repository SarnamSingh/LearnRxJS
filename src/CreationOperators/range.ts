import { range } from "rxjs";

const rangeObservable$ = range(1,20);
const rangeSubscription = rangeObservable$.subscribe((data)=>{
    console.log(data);
});
setTimeout(()=>{
rangeSubscription.unsubscribe();
}, 20000);