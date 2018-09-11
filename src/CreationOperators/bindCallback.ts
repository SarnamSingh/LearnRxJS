import { bindCallback } from 'rxjs';
import { Observable } from "rxjs/Observable";


SomeFunction((a:Number, b:string, c:any)=>{
console.log(a);
console.log(b);
console.log(c);
});

function SomeFunction(func:Function){
    return func;
}

const boundFunction = bindCallback(SomeFunction);
boundFunction().subscribe((variables:any)=>{
console.log(variables);
});