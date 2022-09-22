"use strict";
let username = 'Hello World';
const age = 45;
let isActive = false;
const array = [23, 45, 6, 8];
let arr = [12, 'name', true];
let tuple = ['jame', 12, true];
let tupleArray = [
    [12, 'paid'],
    [2, 'unpaid'],
    [234, 'paid']
];
console.log(tupleArray);
var Directions;
(function (Directions) {
    Directions[Directions["up"] = 1] = "up";
    Directions[Directions["down"] = 2] = "down";
    Directions[Directions["right"] = 3] = "right";
    Directions[Directions["left"] = 4] = "left";
})(Directions || (Directions = {}));
console.log(Directions['left']);
let result = 23;
result = 'hello world';
let user = {
    id: 12,
    name: 'john'
};
let newUser = {
    id: 13,
    name: 'samuel'
};
let cid = '234';
let customerId = cid;
customerId = cid;
function addNum(x, y) {
    return x + y;
}
console.log(addNum(2, 3));
function log(message) {
    console.log(message);
}
const user3 = {
    matricId: 3457,
    group: 'B',
};
const add = (x, y) => x + y;
console.log(add(4, 6));
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `user id: ${this.id} and username: ${this.name} is now registered.`;
    }
}
const brad = new Person(254, 'mosope');
console.log(brad.register());
class NewPersonClass {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `user id: ${this.id} and username: ${this.name} is now registered.`;
    }
}
class Employee extends NewPersonClass {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const newEmployee = new Employee(23435, 'shawn', 'xyz');
console.log(newEmployee.register());
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(['sope', 'john', 'king']);
//# sourceMappingURL=index.js.map