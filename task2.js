class Worker {
    constructor(firstName, secondName, rate, days) {
        this.firstName = firstName
        this.secondName = secondName
        this.rate = rate
        this.days = days
    }
    // getSalary() {
    //     return this.rate * this.days
    // }
}

Worker.prototype.getSalary = function () {
    return this.rate * this.days
}

const worker = new Worker('Ivan', 'Ivanov', 10, 31);
const worker1 = new Worker('Stepan', 'Romanov', 15, 48);
console.log(worker.firstName);
console.log(worker.secondName);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());
console.log(worker1.getSalary());

console.log(worker.getSalary() + worker1.getSalary());