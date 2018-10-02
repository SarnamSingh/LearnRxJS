import { fromEvent, interval } from "rxjs";
import { buffer, bufferCount, bufferTime } from "rxjs/operators";


const fromEvent$ = fromEvent(document, "click");
const interval$ = interval(1000);
//const buffer$ = interval$.pipe(buffer(fromEvent$));
//buffer$.subscribe(data=>console.log(`Buffered data: ${data}`));
//interval$.pipe(bufferCount(5)).subscribe(data=>console.log(`Specified numbered of values buffered:${data}`));
//fromEvent$.pipe(bufferCount(5)).subscribe(data=>console.log(`Specified numbered of values buffered:${data}`));
fromEvent$.pipe(bufferTime(2000)).subscribe(data=>console.log(data));
