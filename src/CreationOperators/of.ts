import { of } from "rxjs";

//1# sending the parameters passed to of operator
const ofObservable$ = of(1,2,3,4,5);
const ofSubscription = ofObservable$.subscribe((data)=>{
    console.log(data);
});
setTimeout(()=>{
    ofSubscription.unsubscribe();
},10000);

//2#
const ofWithMultiTypeParamsObservable$ = of ( {"Name": "Shrish"}, [1,2,3], function Hello(){
    return "Hello";
} );
const ofWithMultiTypeParamsSubscription = ofWithMultiTypeParamsObservable$.subscribe((data)=>{
    console.log(data);
});
setTimeout(()=>{
    ofWithMultiTypeParamsSubscription.unsubscribe();
},20000);