import { fromEvent, of, empty } from "rxjs";
import { mapTo, expand, delay, take } from "rxjs/operators";


const fromEvent$ = fromEvent(document, "click");
fromEvent$.pipe(
    mapTo(1),
    expand(x=>of(2*x)),
    delay(1000),
    take(5)
).subscribe((resultValue:any)=>console.log(resultValue));