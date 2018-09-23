import { from } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

//#1  distinctUntilChanged with basic values
const arrayWithDupliccatevalues$ = from([1,2,2,1,3,4,4,4,2,5,1]);
arrayWithDupliccatevalues$.pipe(distinctUntilChanged()).subscribe(data=>console.log(data));
arrayWithDupliccatevalues$.subscribe(data=>console.log(data));

//#2 distinctUntilChanged with objects
const testObject = {"FirstName": "Sarnam", "LastName":"Singh"};
const arrayWithDuplicateObjects$ = from ([
    testObject,
    testObject,
    testObject,
    testObject,
    testObject
]);
arrayWithDuplicateObjects$.pipe(distinctUntilChanged()).subscribe(data=>console.log(data));
arrayWithDuplicateObjects$.subscribe(data=>console.log(data));