import {from} from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';



const personList = [
    {    name: 'Testing1', age : 25 },
    {    name: 'Testing2', age : 25 },
    {    name: 'Testing3', age : 26 },
    {    name: 'Testing4', age : 26 },
    {    name: 'Testing5', age : 27 },
    {    name: 'Testing6', age : 27 },
];

const from$ = from(personList);
from$.pipe(
    groupBy(person=> person.age),
    mergeMap(group=>group.pipe(toArray()))
).subscribe(resultValue=>console.log(resultValue));