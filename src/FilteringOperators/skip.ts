import { interval, timer } from "rxjs";
import { skip, skipWhile, skipLast, skipUntil } from "rxjs/operators";



const sequentialValues$ = interval(1000);
sequentialValues$.pipe(skip(5)).subscribe(data=>console.log(data));
sequentialValues$.pipe(skipLast(5)).subscribe(data=>console.log(data));
sequentialValues$.pipe(skipWhile(val=>val<4)).subscribe(data=>console.log(data));
sequentialValues$.pipe(skipUntil(timer(5000, 2000))).subscribe(data=>console.log(data));
