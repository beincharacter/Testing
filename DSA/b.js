class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    if(!this.tail) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(data);
      this.tail = this.tail.next;
    }
  }
}


function lengthOfList(LList) {
  let length = 0;
  let current = LList.head;
  while(current) {
    length++;
    current = current.next;
  }
  return length;
}

function findFromLast(LList, element) {
  let len = lengthOfList(LList);
  let i = 0;
  let current = LList.head;

  while(current) {
    if(current.data == element) {
      return (len - i);
    }
    current = current.next;
    i++
  }
}

const LList = new LinkedList();

LList.append(1);
LList.append(2);
LList.append(3);
LList.append(14);
LList.append(5);
LList.append(6);
// console.log(LList);

// let len = lengthOfList(LList);
// console.log(len);

let elementfromlast = findFromLast(LList, 14);
console.log(elementfromlast);
