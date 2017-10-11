// console.log("Hello There");

// console.log(this);

// var b =30;
// let c = 90;


// console.log(this.b, this.c);


// var fubar = "42";

// function baz() {
//     console.log("baz");
//     bar();
// };

// function bar() {
//     console.log("bar");
//     foo();
// };

// function foo() {
//     var fubar = "13";
//     console.log("foo");
//     console.log("this", this); //window
//     console.log("this", this.fubar); // 42 because fubar is defined on the window
// };

// baz();

// Event Listener Example

// var eventFxn = function(event) {
//     console.log("event", event);
//     console.log("event.target", event.target);
//     console.log("this", this);
// }; 

// document.getElementById("my-button").addEventListener("click", eventFxn);


// Example 2: Context objects

// var a = 3; 

// function foo () {
//     console.log("this", this);
//     console.log("this", this.a);
// };

// var obj = {a: 2, monkey: foo};

// obj.monkey();

//Example 3 

// function foo() {
//     console.log("this", this);
//     console.log("this.a", this.a);
// };

// var obj2 = {
//     a: 42,
//     foo: foo
// };

// var obj1 = {
//     a: 2,
//     obj2: obj2
// };

// obj1.obj2.foo();

//Example 4

// function foo() {
//     console.log("this", this);
//     console.log("this", this.a);
// };

// var obj = {
//     a: 2,
//     foo: foo
// };

// var bar = obj.foo;

// var a = "global warning";

// obj.foo();
// bar();


// Example 5

function foo() {
    console.log("this", this);
    console.log("this.a", this.a);
};

function doFoo(fn) {
    return fn();
};

var obj = {
    a: 2,
    foo: foo
};

var a = "oops, global";

doFoo(obj.foo);