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
  console.log("dfgdfg",country);
}


