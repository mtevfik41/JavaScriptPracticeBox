// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';

items[3].textContent = 'hello';

const listItems = document
  .querySelector('ul')
  .getElementsByClassName('collection-item');

// document.getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

lis = Array.from(lis);
lis.forEach((e, index) => {
  e.style.color = '#f53';
  e.textContent = `${index}: Hello`;
});

console.log(lis);

let itemk = document.querySelectorAll('ul.collection li.collection-item');
itemk.forEach((e, index) => {
  e.textContent = `${index}: ${e} Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach((e, index) => {
  e.style.background = '#ccc';
  e.textContent = 'Hi im odd';
});
liEven.forEach((e, index) => {
  e.style.background = '#777';
  e.style.color = '#fff';
  e.textContent = 'Hi im even';
  e.style.transform = 'skewY(1deg)';
});

console.log(itemk);
