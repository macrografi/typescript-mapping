// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

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
