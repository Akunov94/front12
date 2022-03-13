// function someName(){ тело  функции }
//сигнатура
function someName() {
	console.log('test');
}

printElement(1, 2, 3, 4);

someName();
//function declarations
// parameters
// function add
function sum(num1, num2) {
	console.log(num1 + num2);
}
sum(3, 5);

// функция умножения
function multiply(num1, num2) {
	console.log(num1 * num2);
}
multiply(5, 5);
//function division
function division(num1, num2) {
	console.log(num1 / num2);
}
division(50, 2);
// return value
function returnValue(a, b) {
	let sum = a + b;
	// return 'sum ' + ' ' + a + ' ' + 'и' + ' ' + b + ' = ' + sum;
	return `sum ${a} и ${b} = ${sum}`;
}

let res = returnValue(8, 8);
console.log('res: ', res);
//function expression
let sum2 = function (num1, num2) {
	console.log(num1 + num2);
};

sum2(5, 4);
sum2(5, 55);
sum2(5, 44);
//function  declarations arguments, hoisting
function printElement() {
	console.log(arguments);
}
// function expression not arguments, not hoisting
let printElement2 = () => {
	console.log('expression 1');
};

printElement2();

function callFunction(callbackFn) {
	let message = 'msg from CallbackFn';
	callbackFn(message); //msg from CallbackFn
}

function getMessage(txt) {
	//txt = msg from CallbackFn
	console.log(txt);
}
callFunction(getMessage); //2
// callFunction(function(){});// 1

function getSum(addSum) {
	let result = 5 + 5;
	addSum(result);
}

function cbFun(text) {
	console.log(text);
}
getSum(ttt => {
	console.log('ttt: ', ttt);
});

//Arrow Function
const showAlert = () => {
	alert(`I'm Arrow Function`);

	return;
};
showAlert();

const sum4 = (num1, num2) => num1 + num2;
sum4(4, 8); //function

let numbers = [1, 2, 3, 4, 5, 6, 7];

numbers.forEach(num => {
	console.log('num: ', num);
});
