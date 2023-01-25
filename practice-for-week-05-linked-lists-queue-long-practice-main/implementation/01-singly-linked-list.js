// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    addToHead(val) {
    const node = new SinglyLinkedNode(val,null)
    node.next = this.head
    this.head = node
    this.length ++;
    return this;
    }
    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length ++;
        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;

        return this

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
    if(this.head === null)return undefined

    let removed = this.head;
    this.head = this.head.next
    this.length --;
    return removed
    }

    removeFromTail() {
        // Remove node at tail
        // Your code here
        // Write your hypothesis on the time complexity o this method here
        if(!this.head)return undefined
        if(this.length ===1){
            let removed = this.head;
            this.head = null
            this.length --;
            return removed;
        }
        else{
            let current = this.head
            let prev;
            while(current.next){
                prev = current;
              current = current.next
            }
            prev.next = null;
            this.length --;
            return current
        }
    }
    peekAtHead() {
        if(this.head)
        return this.head.value

        else{
            return undefined;
        }
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        if(!this.head)return
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
