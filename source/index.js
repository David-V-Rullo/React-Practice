var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var id = 5;
// Definining basic types
var company = 'Fart Factory';
var age = 41;
var body = true;
// Definining arrays
var arr;
var arrTwo;
//Tuples : Must be in the proper order
var person;
person = [1, true, company];
//Unions
var idTwo = 22;
//Enums : defines a set of named constants
var DirectionOne;
(function (DirectionOne) {
    DirectionOne[DirectionOne["up"] = 0] = "up";
    DirectionOne[DirectionOne["down"] = 1] = "down";
    DirectionOne[DirectionOne["left"] = 2] = "left";
    DirectionOne[DirectionOne["right"] = 3] = "right";
})(DirectionOne || (DirectionOne = {}));
// Objects
var user = {
    id: 1,
    name: "Dave"
};
var player = {
    id: 1,
    name: 'Ted'
};
//Functions
function addNum(x, y) {
    return x + y;
}
var user1 = {
    id: 1,
    name: 'Bella'
};
user1.age = 5;
var add = function (x, y) { return x + y; };
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return this.name + " is now registered";
    };
    return Person;
}());
var dave = new Person(3, 'dave');
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var ted = new Employee(3, 'Danny', 'Janitor');
console.log(ted.register());
