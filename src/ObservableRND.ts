import {Observable} from 'rxjs/Observable';


var observableObject = Observable.create((observer:any)=>{
try{
    
setInterval(()=>{
    observer.next('Hey Guys');
    observer.next('How are you');
    observer.next('I am good');
}, 2000);
}catch(err){
    observer.error(err);
}
});
var observer = observableObject.subscribe(
    (data:any)=>addItem(data),
    (error:any)=>addItem(error),
    ()=>addItem('completed')
);

setTimeout(() => {
    observer.unsubscribe();
}, 6001);
function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}
