import { from } from "rxjs";
import { map } from "rxjs/internal/operators/map";

// #1 emitting multiple of 5.
const from$ = from([1,2,3,4,5,6,7,8,9,10]);
from$.pipe(map(data=>data*5)).subscribe(data=>console.log(data));

//#2 map object property
const fromObject$ = from ([
    {name:'John', age: '30'},
    {name:'Blavin', age: '35'},
    {name:'Dhom', age: '40'}
]);
fromObject$.pipe(map(({name})=>name)).subscribe(data=>console.log(data));