// 1. Declare uma variável de nome weight

let weight

// 2. Que tipo de dado é a variável acima?

console.log(typeof weight)

/* 
    3. Declare uma variável e atribua valores para cada um dos dados:

    *name: String
    *age: Number (intereger)
    *stars: Number (float)
    *isSubscribed: Boolean
*/

let name = "Renan"
let age = 26
let stars = 4.5
let isSubscribed = true


/*
    4. A variável student abaixo é de que tipo de dado?

        let student = {}

    4.1 Atribua a ela as mesmas propriedades e valores do exercício3.

    4.2 Mostre no console a seguinte mensagem:

        <name>de idade <age> pesa <weight> kg.

    Atenção,substiua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/

// Resposta 4: É um objeto vazio

let student = {
    name: "Renan",
    weight: 65,
    age: 26,
    stars: 4.5,
    isSubscribed: true
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenum valor, ou seja, somente o Array vazio.

let students = []

// 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

students = [
    student
]

console.log(students)

// 7. Coloque no console o valor da posição zero do Array acima

console.log(students[0])


// 8. Crie um novo student e coloque na posição 1 do Array students.

const John = {
    name: "John",
    weight: 80.5,
    age: 28,
    stars: 4.8,
    isSubscribed: true
}

students[1] = John

console.log(students)

/* 
    9. Sem rodar o código responda qual é o retorno do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

        console.log(a)

        var a = 1

*/

// Resposta: undefined, por que quando rodamos o console, a variável "a" ainda não havia sido declarada.

console.log(a)

var a = 1
