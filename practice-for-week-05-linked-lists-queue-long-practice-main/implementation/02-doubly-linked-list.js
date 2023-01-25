// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);
        if (this.length > 0) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;


        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
        // Write your hypothesis on the time complexity of this method here
        //constant
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        // Your code here
        // Write your hypothesis on the time complexity of this method here
        const node = new DoublyLinkedNode(val)
        if(!this.head){
            this.head = node;
            this.tail = node;
        }
        else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    removeFromHead() {
        // Remove node at head
        // Your code here
        // Write your hypothesis on the time complexity of this method here
        if(!this.head) return undefined;

        if(!this.head.next){
            let current = this.head;
            this.head = null;
            this.length --;
            return current.value
        }

        let value = this.head
        this.length --;
        this.head = this.head.next;
        this.head.prev = null;
        return value.value;
    }

    removeFromTail() {
     if(!this.tail) return undefined

     if(!this.tail.prev){
        let end = this.tail
        this.tail = null
        this.length --;
        return end.value
     }

     let value = this.tail
     this.length --;
     this.tail = this.tail.prev
     this.tail.next = null;
     return value.value

    }

    peekAtHead() {
        if (this.head)return this.head.value

        else{return undefined}
    }

    peekAtTail() {
        // Return value of tail node
        // Your code here
        // Write your hypothesis on the time complexity of this method here
        if(!this.tail)return undefined;
        else{
        return this.tail.value;
        }
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
