let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const chars = text.split(" ")
console.log(chars)
console.log(chars.length);

console.log('----------------------------')

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift('Meat')
console.log(shoppingCart)
shoppingCart.push('Milk')
console.log(shoppingCart);
shoppingCart.pop(5);
console.log(shoppingCart);
shoppingCart[2] = 'Green Tea';
console.log(shoppingCart);
console.log('------------------------');
const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya"
];
console.log(countries.indexOf('Ethiopia'))
console.log('------------------------');
const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB"
];
let index = webTechs.push('Ssas');
console.log(webTechs)
let sass = webTechs.indexOf('Ssas')
if (index != 'Ssaвs') {
    console.log(sass + ' в списке есть ')
}
console.log('---------------------------------------------');
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack);
console.log('--------------------------------Упражнения: Уровень 3');
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let sorts = ages.sort();

