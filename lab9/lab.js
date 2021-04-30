// Question 2:  Use class syntax to create LinkedList. Methods below:
// 1) add(value)
// 2) remove(value)
// 3) print()

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
 
    add(element) {
        let node = new Node(element);
        let current;
 
        if (this.head == null) this.head = node;
        else {
            current = this.head;
            while (current.next) current = current.next;
            current.next = node;
        }
        this.size++;
    }
    remove(element) {
        let current = this.head;
        let prev = null;
 
        while (current) {
            if (current.data === element) {
                if (prev == null) this.head = current.next;
                else prev.next = current.element;
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    insertAt(element, location) {}
    reomveFrom(element, location) {}
    isEmpty() { return this.size == 0; }
    sizeOfList() { return this.size; }
    print() {
        let current = this.head;
        let str = '{';
        while (current) {
            str += current.data + ' ,';
            current = current.next;
        }
        str += '}';
        console.log(str)
    }
}

let linkedlist = new LinkedList();
let list = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //in the console, you should see: LinkedList{1,2,3}
linkedlist.remove(3);
linkedlist.print(); //in the console, you should see: LinkedList{1,3}
