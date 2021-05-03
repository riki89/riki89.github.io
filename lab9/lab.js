// Question 2:  Use class syntax to create LinkedList. Methods below:
// 1) add(value)
// 2) remove(value)
// 3) print()

class LinkedList {

constructor(arr){
    if(arr){
      arr.forEach(elem => this.add(elem));
    }
}

  add(element) {
    if (this.value === undefined) {
      this.value = element;
      this.next = null;
    } else {
      let current = this;
      while (current.next) {
        current = current.next;
      }
      current.next = { value: element, next: null };
    }
  }

  remove(element) {
    var current = this;
    var prev = null;

    while (current) {
      if (current.value === element) {
        if (prev == null) {
          this.value = current.next.value;
          this.next = current.next.next;
        } else {
          prev.next = current.next;
        }
        return true;
      }
      prev = current;
      current = current.next;
    }
    return false;
  }

  printHelper(list, result) {

    if (list.next == null) {
      result += list.value;
      return result;
    }
    result += list.value + ',';
    return this.printHelper(list.next, result);
  }

  print() {
    let result = 'LinkedList{';
    result = this.printHelper(this, result);
    result += '}';
    console.log(result);
  }

}

let linkedlist = new LinkedList();
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
        questionsArray.forEach(question => this.questions.set(question.questionId, question.answer));
        this.students = students;
    }

    scoreStudent(studentId) {
        let student = this.students.filter(student => student.studentId === studentId)[0];
        return student.answers.reduce((sum, currentQuestion) => {
            if(currentQuestion.checkAnswer(this.questions.get(currentQuestion.questionId))){
              sum = sum + 1;
            }
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
