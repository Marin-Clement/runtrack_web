let a = prompt("Entrez un nombre 1");
let b = prompt("Entrez un nombre 2");

if (isNaN(a) || isNaN(b)) {
    alert("Veuillez entrer des nombres");
    a = prompt("Entrez un nombre 1");
    b = prompt("Entrez un nombre 2");s
}

let sum = parseInt(a) + parseInt(b);
let sub = parseInt(a) - parseInt(b);
let mul = parseInt(a) * parseInt(b);
let div = parseInt(a) / parseInt(b);

document.write("La somme de " + a + " et " + b + " est " + sum + "<br>");
document.write("La soustraction de " + a + " et " + b + " est " + sub + "<br>");
document.write("La multiplication de " + a + " et " + b + " est " + mul + "<br>");
document.write("La division de " + a + " et " + b + " est " + div + "<br>");