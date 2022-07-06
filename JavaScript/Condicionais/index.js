// if ... else

let temperature = 37.4

if (temperature >= 37.5) {

    console.log("Febre Alta") 

} else if(temperature < 37.5 && temperature >= 37) {

    console.log("Febre Moderada")

} else {

    console.log("Saudável")
}


// switch case

function calculate(number1, operator, number2) {

    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break;

        case '-':
            result = number1 - number2
            break
        
        case '*':
            result = number1 * number2
            break

        case '/':
            result = number1 / number2
            break
    
        default:
            console.log("não implementado")
            break;
    }

    return result
}

console.log(calculate(4, '*', 8))


// throw

function sayMyName (name = "") {

    if (name === '') {

        throw new Error ("Nome é obrigatório")
    }

    console.log(name)
}


// try...catch

try {

    sayMyName("Renan")

} catch (e) {

    console.log(e)

}

console.log("Após ao try/catch")



// for

// break - para a execução do loop
// continue - pula a execução do momento

for(let i = 1; i < 10; i++) {

    // if(i === 5) {

    //     continue;
    // }

    
    console.log(i)
}


// while

let i = 49586394505

while(i > 10) {

    console.log(i)

    i /= 35
}


// for ... of 

let name = "Renan"
let names = [ "João", "Paulo", "Pedro"]

for (let char of names) {
    console.log(char)
}


// for ... in

let person = {
    name: "John",
    age: 30,
    weight: 88.6
}

for (let property in person) {
    console.log(property)
    console.log(person[property])
}


var n = 5;
var aux = '';
for (var linha = 1; linha <= n; linha++) {
    for(var coluna = 1; coluna <= n; coluna++) {
        if (coluna == linha) {
            aux += '*'
        }
    }
    console.log(aux)
} 


var n = 5;
var aux = "";
for (var linha = 1; linha <= n; linha++) {
  for (var coluna = 1; coluna <= n; coluna++) {
    aux += "*";
  }
  console.log(aux);
  aux = "";
}