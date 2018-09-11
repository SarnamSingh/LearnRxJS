import {Subject} from 'rxjs/Subject';

var subject =new  Subject();

subject.subscribe(
data=>addItem("Observer1 :"+data),
err=>addItem(err),
()=>addItem('completed')
);

subject.next("The first data has been sent.");
var observer2 = subject.subscribe(
    data=>addItem("Observer2 :"+data));

    subject.next("The second data has been sent");
    subject.next('The third data has been sent');

    observer2.unsubscribe();
    subject.next("The final data has been sent");

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}
