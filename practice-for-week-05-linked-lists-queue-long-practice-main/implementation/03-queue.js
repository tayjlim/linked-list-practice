const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        const newNode = new SinglyLinkedNode(val)

        // if(!this.head){
        //     this.head = newNode
        //     this.tail = newNode
        //     this.length++
        //     return this.length
        // } else {
        //     let curr = this.head
        //     while(curr.next){
        //         curr = curr.next;
        //     }
        //     curr.next = newNode;
        //     this.tail = newNode;
        //     this.length++
        //     return this.length
        // }

            if(!this.tail){
            this.head = newNode
            this.tail = newNode
            this.length++
            return this.length
            }else{
                this.tail.next = newNode;
                this.tail = newNode;
                this.length++
                return this.length;
            }

    }

    dequeue() {
        if(!this.head) return null
        if(this.length === 1){
            let curr = this.head
            this.head = null
            this.tail = null
            this.length--
            return curr.value;
        }
        else {
            let curr = this.head
            this.head = this.head.next
            this.head.prev = null;
            this.length--
            return curr.value;
        }
        // Remove node from front of queue (linked list)

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
