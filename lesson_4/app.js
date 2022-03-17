// DOM -> DOCUMENT OBJECT MODAL
//SELECTOR  . # html tags
// let div = document.getElementById('div'); // get by id
// let p = document.getElementsByTagName('p'); // get by tag
// let p = document.getElementsByClassName('p-text'); // get by tag
// let p = document.querySelector('.p-text'); // get by selector class
// let p = document.querySelector('p'); // get by selector class
// let p = document.querySelectorAll('p'); // get by selector tag ALL
// const el = document.querySelector("[type='text']");// get by attribute type
// let p = document.querySelectorAll('p'); // get by selector tag ALL
// console.log('p: ', (p.innerText = 'Hello'));
// console.log('p: ', (p.style.background = 'red'));
// Arrow function ()=>{}
// p.forEach((pTag, index) => {
// 	if (index < 3) {
// 		console.log(pTag.classList.add('active'));
// 	} else {
// 		pTag.style.color = 'green';
// 	}
// });

// let newDiv = document.createElement('div');
// // let newP = document.createElement('p');
// // console.log('newP: ', newP);
// console.log('newDiv: ', (newDiv.innerText = 'Hello Div'));

// console.log('newDiv: ', newDiv);

// document.body.append(newDiv);
/* 
Events
 click,
  change , 
  submit, 
  focus,
   scroll ,
   input, 
   keydown,
    keypress, 
    keyup,
    
*/
// const inputEmail = document.querySelector('.email');
// const inputPassword = document.querySelector('.pass');
// const buttonGet = document.querySelector('button');
// // inputEl.addEventListener('change', () => {
// // 	//
// // 	console.log(inputEl.value);
// // });
// function getValue() {
// 	if (
// 		inputEmail.value === 'admin@mail.ru' &&
// 		inputPassword.value === 'admin123'
// 	) {
// 		console.log('Welcome');
// 	} else {
// 		alert('ERROR');
// 	}
// }
// buttonGet.addEventListener('click', getValue);

// // buttonGet.addEventListener('click', () => {
// // 	getValue();
// // });

const pEl = document.querySelector('.p-text');
const btnShowDiv = document.querySelector('button');
const btnChange = document.querySelector('.btn');
const removeDiv = document.querySelector('#div');
const style = `
  color: red;
  font-size: 26px;
`;
pEl.style = style;
btnChange.addEventListener('mouseout', showWeb);

function getRandomNum(min, max) {
	let num = Math.round(Math.random() * (max - min) + min);
	return num;
}

function getHexNum(num) {
	return num.toString(16);
}
let c = 0;
function showWeb(e) {
	c++;
	let red = getHexNum(getRandomNum(0, 255));
	let blue = getHexNum(getRandomNum(0, 255));
	let green = getHexNum(getRandomNum(0, 255));
	let hex = `#${red}${blue}${green}`;
	console.log('hex: ', hex);
	document.body.style.background = hex;
	removeDiv.hidden = true;
	pEl.innerText = c;
}

btnShowDiv.onclick = () => {
	removeDiv.hidden = false;
};
