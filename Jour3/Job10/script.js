const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map(number => number * 2);

const evenNumbers = numbers.filter(number => number % 2 === 0);

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Tableau de nombres d'origine : ", numbers);
console.log("Tableau avec chaque valeur doublée : ", doubledNumbers);
console.log("Tableau avec uniquement les nombres pairs : ", evenNumbers);
console.log("Somme de toutes les valeurs : ", sum);
