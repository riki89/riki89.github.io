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
class Question {
    constructor(questionId, answer) {
        this.questionId = questionId;
        this.answer = answer;
    }

    checkAnswer(correctAnswer) {
        return this.answer === correctAnswer;
    }

}

class Student {

    constructor(studentId, answers = []) {
        this.studentId = studentId;
        this.answers = answers;
    }

    addAnswer(question) {
        this.answers.push(question);
    }

}

class Quiz {
    constructor(questionsArray = [], students = []) {
        this.questions = new Map();
        //TODO: add line to convert questionArray to Map questions
        questionsArray.forEach(question => this.questions.set(question.questionId, question.answer));
        this.students = students;
    }

    scoreStudent(studentId) {
        //TODO: compute student score based on answers
        let student = this.students.filter(student => student.studentId === studentId)[0];
        return student.answers.reduce((sum, currentQuestion) => {
            let questionId = currentQuestion.questionId; //find quesiton id
            let correctAnswer = this.questions.get(questionId); //get correctAnswer from Map
            let result = currentQuestion.checkAnswer(correctAnswer); //compare currentQuestion answer with correctAnswer
            if (result) {
                sum = sum + 1;
            }

            // if(currentQuestion.checkAnswer(this.questions.get(currentQuestion.questionId))){
            //   sum = sum + 1;
            // }

            return sum;
        }, 0);
    }

    getAverageScore() {
        return this.students.reduce((average, currentStudent, index, array) => average + this.scoreStudent(currentStudent.studentId) / array.length, 0);
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
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudent(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudent(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5
