// criar um aplicativo de frases motivacionais

// declaration - declaração da função

// function statement

function createPhrases() {
    console.log("Estudar é muito bom")
    console.log("Paciência e persistência")
    console.log("Revisão é a mãe do aprendizado")
}
                         
// executar a função
// rodar, chamar, invocar
// execute, run, call, invoke

createPhrases()


// function expression
// function anonymous
// parâmetros(parameters)

const sum = function(number1, number2) { // TODA A FUNÇÃO QUE NÃO TEM RETORNO É UNDEFINED

    console.log(number1 + number2)
}
sum(2, 3) // arguments-argumentos


// parâmetros(parameters)

const sum2 = function(number1, number2) {
    total = number1 + number2
    return total
}

let number1=34
let number2=25

console.log(`o número1 é ${number1}`)
console.log(`o número2 é ${number2}`)
console.log(`a soma é ${sum2(number1, number2)}`)


// function scope

let subject = 'create video'

function createThink(subject) {

    subject='study'

    return subject
}
console.log(createThink(subject))

console.log(subject)

/* substituir o valor do scopo não passamos o argumento

    let subject = 'create video'

    function createThink() {

        subject='study'

        return subject
    }
    console.log(createThink(subject))

    console.log(subject)
*/


// function hoisting

sayMyName()

function sayMyName() {

    console.log('Renan')
}


// arrow function

const sayMyName2 = (name) => {

    console.log(name)
}

sayMyName2('Renan Arimatea')


// callback function

function sayMyName3(name) {

    console.log('antes de executar a função callback')

    name()

    console.log('depois de executar a callback')
}

sayMyName ( 
    
    () => {
        console.log('estou em uma callback')
    }
)


/*
Function()constructor

    *expressão new
    *criar um novo objeto
    *this keyword
*/

function Person(name) {

    this.name = name

    this.walk = function() {
        return this.name + " está andando"
    }
}

const mayk = new Person("Mayk")
const joao = new Person("João")

console.log(mayk.walk())
console.log(joao.walk())
