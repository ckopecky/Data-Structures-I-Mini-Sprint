/*
Singly Linked List

NOT AN ARRAY!

    -- comprised of nodes
    -- Linked list has to have a head and a tail. 
    -- has a value and a next value

    Linked List that has three items:

    node 1      node 2      node 3
    next: 2 ==> next: 3 ==> next: null
    value: 1    value: 2    value: 3
    head                    tail

    empty linked lists: head and tail both point to null
    add 1 node: head and tail both point to that node. 

    Linked Lists can be spaced throughout memory -- it doesn't need a chronological store

    linked list creation: object that will take in value

    real life: queues, hash tables
*/

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addNode(value) {
        //1. create the new node
        const newNode = {
            value: value,
            next: null
        }

        //first one?
        if(this.head === null && this.tail === null){
            this.head = newNode;
            this.tail = newNode;
        } else {         
            //2. move pointers to head and tail
            this.tail.next = newNode; //original tail next value points to newNode
            this.tail = newNode; //new tail points to newNode
        }
    }
}

const myList = new LinkedList;
myList.addNode(10);
myList.addNode("a");
myList.addNode(true);
myList.addNode(4);
myList.addNode(5);

//LinkedList { head: { value: 1, next: { value: 2, next: [Object] } }, 
//tail: { value: 5, next: null } }

console.log(myList);






