// Import stylesheets
import './style.css';

// Map Operations
let nameAgeMapping = new Map<string, number>();

nameAgeMapping.set('Lokesh', 37);
nameAgeMapping.set('Raj', 35);
nameAgeMapping.set('John', 40);

for (let key of nameAgeMapping.keys()) {
  console.log('key is : ', key);
}

for (let value of nameAgeMapping.values()) {
  console.log('value is : ', value);
}

for (let entry of nameAgeMapping.entries()) {
  console.log('entry is : ', entry);
}

for (let [key, value] of nameAgeMapping) {
  console.log(key, value);
}

//
const map1 = new Map<string, string | number>([
  ['name', 'John'],
  ['age', 30],
  ['country', 'Germany'],
]);

map1.set('country', 'Turkey');
//console.log(map1.has('name'));

const country = map1.get('country');

if (country === 'string') {
  console.log(country.toUpperCase());
  console.log('dfgdfg', country);
}

const myMap = new Map();

const keyString = 'a string';
const keyObj = {};
const keyFunc = () => {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

console.log('my map size : ', myMap.size);

// getting the values
myMap.get(keyString); // "value associated with 'a string'"
myMap.get(keyObj); // "value associated with keyObj"
myMap.get(keyFunc); // "value associated with keyFunc"

myMap.forEach((value, key) => {
  console.log(key + ' = ' + value);
});

// merged map
const first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

const second = new Map([
  [1, 'uno'],
  [2, 'dos'],
]);

const merged = new Map([...first, ...second, [1, 'eins']]);

merged.forEach((value, key) => {
  console.log(key + ' = ' + value);
});
