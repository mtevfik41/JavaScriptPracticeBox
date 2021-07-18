// REPLACE ELEMENT

const newHeading = document.createElement('h2');

// add id

newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));
// get old heading
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');
// replace
cardAction.replaceChild(newHeading, oldHeading);

// remove element

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// remove list item

lis[0].remove();
// Remove child element
list.removeChild(lis[3]);

// Classes and attributes

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.add('fafa');
link.classList.remove('test');

val = link;

// Attributes

val = link.getAttribute('href');
val = link.setAttribute('href', 'https://google.com');
val = link.setAttribute('target', '_blank');
val = link.setAttribute('id', 'mtk');
val = link.hasAttribute('target');
console.log(val);
