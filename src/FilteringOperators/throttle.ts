import { interval } from "rxjs";
import { throttle, throttleTime } from "rxjs/operators";

const interval$ = interval(1000);
interval$.pipe(throttle(val=>interval(2000))).subscribe(data=>console.log(data));
interval$.pipe(throttleTime(5000)).subscribe(data=>console.log(data));
