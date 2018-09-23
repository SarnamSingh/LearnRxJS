import { fromEvent, interval } from "rxjs";
import { debounceTime, map } from 'rxjs/operators';

//#1 Emit the most recent click after a burst of clicks
//  const clicks =  fromEvent(document, "click");
//  const result = clicks.pipe(debounceTime(1000));
//  result.subscribe((data:any)=>console.log(data));

 //#2
 var inputTextBox = document.getElementById("testInput");
 console.log(inputTextBox.getAttribute("value"));
 const userInput$ = fromEvent<KeyboardEvent>(inputTextBox, "keyup").pipe(
     map((e)=>
        {
         (<HTMLInputElement>( <KeyboardEvent> e).currentTarget).getAttribute("value")
        }
    )
    );
 const debouneValue$ =  userInput$.pipe(debounceTime(500));
 debouneValue$.subscribe(
     (data:any)=>{
         console.log(`Debounced value ${data}`)
     }
    );