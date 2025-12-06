class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.scroes = [];
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    addScroes(score) {
        this.scroes.push(score);
    }

    averageScores() {
        return this.scroes.reduce((a, b) => a+b) / 2;
    }

    static enrollStudents() {

    }
}

let firstStudent = new Student("Saanvi", "Rachan");
let secondStudent = new Student("Advik", "Rachan");

firstStudent.addScroes(93)
firstStudent.addScroes(95);

console.log(firstStudent.fullName(), firstStudent.scroes, firstStudent.averageScores())
console.log(secondStudent.fullName())

// node classes.js



class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y -b.y;
        return Math.hypot(dx, dy);
    }

}

const pt1 = new Point(5,5);
const pt2 = new Point(10,10);

console.log(Point.distance(pt1, pt2));