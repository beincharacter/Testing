let fs = require("fs");
let data = fs.readFileSync("a.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format 



class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
 
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    append(data){
        if (this.tail === null){
            this.head = new Node(data)
            // console.log(this.head, " in if head")
            this.tail = this.head
            // console.log(this.tail, " in if tail")
        }
        else{
            this.tail.next = new Node(data)
            // console.log(this.tail.next, " in else tail.next")
            this.tail = this.tail.next
            // console.log(this.tail,  " in else tail")
        }
}
}
function lengthLlist(llist){
    let length = 0;
    let current = llist.head;
    while(current){
        current = current.next;
        length = length + 1;
    }
    return length;
}
 
function returnNFromLast(llist, n){
   	//Implement this
	   let len = lengthLlist(llist);
	   let indexFromFront = len + 1 - n;

	   let temp = llist.head;
	   for(let i=0; i<indexFromFront-1; i++) {
		   temp = temp.next;
	   }
	   return temp.data;
}
 

function ConvertToIntegers(ar){
    for(let i=0;i<ar.length;i++){
        ar[i]=parseInt(ar[i]);
    }
    return ar;
}

let input= readLine().split(" ");
let N= parseInt(input[0]);
let n =parseInt(input[1]); 
let aLlist = new LinkedList()

let ar = readLine().split(" ")
let l = ConvertToIntegers(ar)
for(i of l){
    aLlist.append(i) 
}

value = returnNFromLast(aLlist, n)
 
console.log(value);