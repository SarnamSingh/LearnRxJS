import { from } from "rxjs";

// 1# creating an observable from Array
const fromArrayObservable$ = from([10, 20, 30]);
const subscription =  fromArrayObservable$.subscribe((item)=>{
    console.log(item);
});
setTimeout(()=>{
    subscription.unsubscribe();
}, 5000);

// 2# creating an observable from promise
const fromPromiseObservable$ = from (
    new Promise(
        resolve=>resolve('this value emitted through promise')
    )
);
const promiseSubscription = fromPromiseObservable$.subscribe((data)=>console.log(data));
setTimeout(()=>{
    promiseSubscription.unsubscribe();
}, 10000);

//3# creating an observable from collection
const mapSource = new Map();
mapSource.set(1,"Hello");
mapSource.set(2, "Value from Map collection");
const mapObservable$ = from(mapSource);
const mapSubscription = mapObservable$.subscribe((resultData)=>{
    console.log(resultData);
});
setTimeout(()=>{
    mapSubscription.unsubscribe();
}, 15000);

//4# creating an observable from string
const stringObservable$ = from('This is simple string representation');
//const stringObservable$ = from({'FirstName':'Shrish', 'LastName':'Singh'});
const stringSubscription =  stringObservable$.subscribe((resultData)=>{
    console.log(resultData);
});
setTimeout(()=>{
    stringSubscription.unsubscribe();
}, 20000);