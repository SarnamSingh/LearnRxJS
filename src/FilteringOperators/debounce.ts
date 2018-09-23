import { fromEvent, interval } from "rxjs";
import { debounce } from 'rxjs/operators';

//#1 Emit the most recent click after a burst of clicks
 const clicks =  fromEvent(document, "click");
 const result = clicks.pipe(debounce(()=> interval(1000)));
 result.subscribe((data:any)=>console.log(data));


