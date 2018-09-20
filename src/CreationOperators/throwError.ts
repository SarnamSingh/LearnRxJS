import { throwError } from "rxjs";

const throwErrorObservable$ = throwError("Error occurred on subscription.");
const throwErrorSubscription = throwErrorObservable$.subscribe({
    next: data=>console.log(data),
    complete: () => console.log("Completed"),
    error:data=>console.log(`Error: ${data}`)
});