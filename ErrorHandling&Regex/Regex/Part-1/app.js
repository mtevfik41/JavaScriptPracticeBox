let re;
re = /hello/;
re = /hello/i; // i =  case insensitive
// re = /hello/g; // Global search

// console.log(re);
// console.log(re.source);

// exec() - Return result in an array or null
const result = re.exec('hello world');

console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test() - Returns true or false
const result3 = re.test('Hello');
console.log(result3);

// match() - Return result array or null
const str = 'Hello There';
const result1 = str.match(re);
console.log(result1);

// search() - Returns index of the first match if not found retuns -1
const str1 = 'Brad Hello There';
const result2 = str1.search(re);
console.log(result2);

// replace() - Return new string with some or all matches of a pattern
const str2 = 'Hello There';
const newStr = str2.replace(re, 'Hi');
console.log(newStr);