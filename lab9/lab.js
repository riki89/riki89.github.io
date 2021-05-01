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

//Question 3
function Student(id){
    this.studentId = id;
    this.answers = [];
    this.addAnswer = function(question){
        this.answers.push(question);
    }
}

function Question(id, value){
    this.qid = id;
    this.answer = value;
    this.checkAnswer = function(answer){
        //console.log('this ans: '+this.answer+ ' p: '+answer);
        //console.log(this.answer === answer);
        return this.answer === answer ;
    }
}

function Quiz(q, s){
    this.questions = q;
    this.students = s;
    this.scoreStudentBySid = function(sid){
      // console.log('-=-==== '+this.students);
        let std = this.students.find(s => s.studentId === sid );
        console.log('std: '+std.studentId);
        
        let correctAnswers = this.questions.filter(q =>   std.answers.filter(a => {a.qid === q.qid && a.checkAnswer(q.answer)}));
        // let correctAnswers = this.questions.filter((id, ans) => std.answers.filter(a => ans.checkAnswer(a)));
        
        return correctAnswers.length; 
    }
    this.getAverageScore = function(){
        let total = this.students.reduce((accum, val) => (accum+this.scoreStudentBySid(val.studentId)), 0);
        //console.log('total: '+total);
        let avg = total/this.students.length;
        return avg;
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
// Array.from(questions.values()).map( (v) => {console.log('value: '+v.answer)});
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5

