import { Observable } from "rxjs/Observable";

// 1# basic example of create operator
var helloObservable$ = Observable.create((observer:any)=>{
    observer.next("Hello");
    observer.next("World");
    });

    helloObservable$.subscribe((data:any)=>{
            console.log(data);
    });

    // 2# Observable emits even numbers
    var evenNumberObservable$ = Observable.create((observer:any)=>{
      let value = 0;
      const runningInterval = setInterval(()=>{
          if (value%2===0){
              observer.next(value);
          }
          value++;
      },1000);
      return ()=>clearInterval(runningInterval);
    });
var subscription = evenNumberObservable$.subscribe((data:any)=>{
    console.log(data);
});

setTimeout(()=>{
    subscription.unsubscribe();
},10000);