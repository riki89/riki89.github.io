student = {
    firstName: '',
    lastName: '',
    grades: [],
    inputNewGrade (newGrade){
        this.grades.push(newGrade);
    },
    computeAverageGrade(){
        let result = this.grades.reduce((accumulator, val) => (accumulator  + val), 0);
        let avg = result/this.grades.length;
        return avg;
    },
}

students = [
]

let student1 = Object.create(student);

student1.firstName = "Yaya";
student1.lastName = "Diallo";
student1.inputNewGrade(3); 
student1.inputNewGrade(3.2); 
student1.inputNewGrade(3.4); 
student1.inputNewGrade(3.6);

console.log(student1.computeAverageGrade());

let student2 = Object.create(student);

student2.firstName = "Ahmed";
student2.lastName = "Snow";
student2.inputNewGrade(3); 
student2.inputNewGrade(3.2); 
student2.inputNewGrade(3.4); 
student2.inputNewGrade(4);

console.log(student2.computeAverageGrade());
students.push(student2)

let result = students.map(a => a.computeAverageGrade()).reduce((accumulator, val) => (accumulator  + val), 0);
        let avg = result/students.length;
console.log(avg);

//
function Student(firstName, lastName, grades){
    this.inputNewGrade = function(newGrade){
        grades.push(newGrade);
    };
    this.computeAverageGrade = function(){
        let result = grades.reduce((accumulator, val) => (accumulator  + val), 0);
        let avg = result/grades.length;
        return avg;
    };
}


let stud1 = new Student("John", "Snow", [3, 3.2, 4]);
let stud2 = new Student("James", "Rodrigues", [3.2, 3.3, 4]);
studs = [
    stud1,
    stud2
];

let result = studs.map(a => a.computeAverageGrade()).reduce((accumulator, val) => (accumulator  + val), 0);
        let avg = result/studs.length;
console.log(avg);

stud1.constructor.sort();

//
Array.prototype.mySort = function() { 
    return this.sort((a,b)=>{
    return a.lastName > b.lastName ? 1:-1
    });
    
   }
    
   console.log(studs.mySort());


//Use object literal and constructor function to implement a single LinkedList.
//Object litteral
let Node =  {
    data:null,
    next:null
 }
 
 let LinkedList = {
   firstNode:null ,
    lastNode:null,
       size:null,
 
   add:function(value){
   
   let newNode = Object.create(Node);
    newNode.data = value;
     if (this.firstNode == null) {
       this.firstNode = newNode;
       this.lastNode = newNode;
     }
     else {
       this.lastNode.next = newNode;
       this.lastNode = newNode;
     }
 
     this.size++;
    
   },
 
     getSize : function() {
     return this.size;
   }
   ,  
    print : function() {
 
    var currentNode = this.firstNode;
       
       result = 'Expected Result: LinkedList{';
       
       for (i = 0; currentNode != null; i++) {
         if (i > 0) {
           result += ',';
         }
         var dataObject = currentNode.data;
         
         result += (dataObject == null ? '' : dataObject);
           currentNode = currentNode.next;
       }
       result += '}';
       console.log(result) ;
 
   },
 
     remove : function(data) {
     var currentNode = this.firstNode;
         if (this.size == 0) {
           return;
         }
                     
         var deleted = false;
         if (data == currentNode.data) {
             if (currentNode.next == null) {
               this.firstNode.data = null;
               this.firstNode = null;
               this.lastNode = null;
               this.size--;
               return;
             }
             
           currentNode.data = null;
           currentNode = currentNode.next; 
           this.firstNode = currentNode;
           this.size--;
           return;
         }
 
           
         while (true) {
             if (currentNode == null) {
               deleted = false;
                 break;
             }
 
             var nextNode = currentNode.next;
             if (nextNode != null) {
                 if (data == nextNode.data) {
                     var nextNextNode = nextNode.next;
                     currentNode.next = nextNextNode;
                     nextNode = null;
                     deleted = true;
                     break;
                 }
             }
             currentNode = currentNode.next;
         }
         this.size--;
   }
 }
 
let linkedlist = Object.create(LinkedList);
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //Expected Result: LinkedList{1,2,3};
linkedlist.remove(2);
linkedlist.print(); //Expected Result: LinkedList{1,3};//
//using constructor function
function LinkedList(){
    this.values = [];
    this.add = function(a){
        this.values.push(a);
    }
    this.remove = function(a){
        this.values.pop(a);
    } 
    this.print = function(){
        console.log(this.values);
    }
}
let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //Expected Result: LinkedList{1,2,3};
linkedlist.remove(2);
linkedlist.print(); //Expected Result: LinkedList{1,3};
//
