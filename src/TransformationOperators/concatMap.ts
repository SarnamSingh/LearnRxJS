import {fromEvent, interval, of} from 'rxjs';
import { concatMap, take, map, pluck, mergeMap, concatMapTo} from 'rxjs/operators';

var txtFirstName = document.querySelector('#txtFirstName');
var txtLastName = document.querySelector('#txtLastName');

const firstName$ = fromEvent(txtFirstName, "blur").pipe(
    pluck('target','value')
);
firstName$.subscribe(data=>console.log(`FirstName subscription ${data}`));

const lastName$ = fromEvent(txtLastName, "blur").pipe(
   pluck('target','value')
);
lastName$.subscribe(data=>console.log(`LastName subscription ${data}`));

let nameByMergeMap$ =  firstName$.pipe(
    mergeMap(firstName=> lastName$.pipe(
       map((lastName:any)=>`Full Name By MergeMap : ${firstName} ${lastName}` )

    ))
);
nameByMergeMap$.subscribe(name=>console.log(name));

let nameByConcatMap$ =   firstName$.pipe(
    concatMap((firstName:any)=>of('Singh').pipe(
        map(lastName=> `Full Name By concatMap : ${firstName} ${lastName}`)
    ))
);
nameByConcatMap$.subscribe(data=>console.log(data));

let nameByConcatMapTo$ = firstName$.pipe(
    concatMapTo(lastName$, (firstName, lastName)=>{
        `Full Name By concatMapTo : ${firstName} ${lastName}`    })
);
nameByConcatMapTo$.subscribe(data=>console.log(data));
