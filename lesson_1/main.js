console.log("Hello I'm JS");
// console.log(' \"Test');
// комментарии ""  ' '  `` 3

//alert('Text')

let camelCase = '';

let snake_case = '';

let age = 15; // type number
// let number = 5n; // type BigInt
let bool = false; // boolean
let bool2 = true; // boolean
let nuLL = null; // type obj
let undefineD = undefined;
// let symbol = Symbol('a')
// alert('Hello my name is ' + name);

const myNameIs = 'Alex'; // type string Assignment to constant variable.
const my_name_is = 'Alex'; // type string Assignment to constant variable.
// name = 45;
// let input = prompt('Are you sure?');
// alert('Hello ' + input);

// let result = str + ' ' + num; // String 5

// console.log(result);

// if (color === 'green') {
// 	console.log('go');
// } else if (color === 'yellow') {
// 	console.log('wait');
// } else if (color === 'red') {
// 	console.log('Stop');
// }

let color = prompt('write the color');
switch (color) {
	case 'green':
		console.log('go');
		break;
	case 'yellow':
		console.log('wait');
		break;
	case 'red':
		console.log('stop');
		break;
	default:
		console.log('error');
}

if (color === 'green') {
}

// тернарный оператор ->  условие ? действие1 : действие2

// let result = color === 'green' ? 'go' : color === 'red' ? 'stop' : 'wait';

// console.log(result);

let admin;
let name = 'JHON';
admin = name;
// alert(admin);

// let isRain = true;
// isRain = false;

// if (isRain) {
// 	console.log('da');
// } else {
// 	console.log('net');
// }

let size = prompt('write size'); // L XL XXL M S
console.log('size: ');

switch (size.toUpperCase()) {
	case 'S':
		console.log('заказ на размер ' + size);
		break;
	case 'L':
		console.log('заказ на размер ' + size);
		break;
	case 'M':
		console.log('заказ на размер ' + size);
		break;
	case 'XL':
		console.log('заказ на размер ' + size);
		break;
	case 'XXL':
		console.log('заказ на размер ' + size);
		break;
}

function get(name) {}

get('test');

/*

#hm
1 Создать переменную year присвоить текущий год 
Создать переменную myYear и присвоить ваш год рождение. 
Используя оператор минус [-] сохранить ваш возраст в переменную myAge
Например: let с = а - b
в console печатать myAge
2 Переменная num может принимать 4значения: 1, 2, 3 или 4. 
Если она имеет значение '1', то в console печатаем 'зима', 
если имеет значение '2' – 'весна' и так далее. 
Решите задачу через prompt и switch-case.
3 Напишите программу который спрашивает вашу имя. 
Например: Вы Alex? если true то в alert('Привет Alex') 
иначе alert('Привет незнакомец'). 
Решите задачу используя confirm
*/

//есть массив из объектов
const developers = [
	{ name: 'Alex 1', salary: 55000 },
	{ name: 'Alex 2', salary: 45000 },
	{ name: 'Alex 3', salary: 35000 },
	{ name: 'Alex 4', salary: 25000 },
];
//обходим через цикл for
for (let i = 0; i < developers.length; i++) {
	//и проверяем Alex 4
	if (developers[i].name === 'Alex 4') {
		//если найдено то печатаем имя и зарплату
		console.log(developers[i].name);
		console.log(developers[i].salary);
	}
}
