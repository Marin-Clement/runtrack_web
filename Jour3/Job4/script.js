function sum(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert("Veuillez entrer des nombres");
    }
    return parseInt(a) + parseInt(b);
}


const checkString = (string) => {
    const length = string.length;
    return length > 0 ? `La chaîne contient ${length} caractères` : "La chaîne est vide";
  };


console.log(sum(1, 2));
console.log(checkString("momo"));