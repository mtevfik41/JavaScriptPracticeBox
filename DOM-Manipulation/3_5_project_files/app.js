let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
val = list.childNodes; // nodelist
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// 1 - Element;
// 2 - Attribute;
// 3 - Text node
// 8 - Comment;
// 9 - Document itself;
// 10- Doctype

// val.forEach((e) => {
//   console.log(e);
// });

// Get children element nodes

val = list.children; // HTML collection

val = list.children[0];

val = list.children[3].children[0].setAttribute('href', 'https://google.com');

val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

val = listItem.parentNode;
val = listItem.parentElement;
// val =
//   listItem.parentElement.parentElement.parentElement.parentElement.parentElement
//     .parentElement.parentElement.parentElement;

// val = listItem.nextSibling;
// val =
//   listItem.nextElementSibling.nextElementSibling.nextElementSibling
//     .nextElementSibling.nextElementSibling;

console.log(val);
