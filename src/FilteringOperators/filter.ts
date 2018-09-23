import { from } from "rxjs";
import { filter } from "rxjs/operators";

// #1 emitting even numbers
const number$ = from([0,1,2,3,4,5,6,7,8,9]);
number$.pipe(filter(item=>item%2==0)).subscribe(data=>console.log(data));

