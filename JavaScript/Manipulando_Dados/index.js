// Manipulando Strings e Números

// Transformar String em Número e Número em String

let string = "123"
console.log(Number(string))

let number = 321
console.log(String(number))


// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

let word = "Paralelepipedo"
console.log(word.length)

let number1 = 1234
console.log(String(number1).length)


// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number3 = 345.32556545454
console.log(number3.toFixed(2).replace(".", ",")) // ATENÇÃO: ESTA CONVERSÃO GERA UMA STRING E NÃO UM NUMBER


// Transforme letras minúsculas em maiúsculas.Faça o contrário disso também

let palavra = "Programar é muito bacana!"
console.log(palavra.toLowerCase() .toUpperCase())


// Verificar se o texto contém a palavra Amor

let phrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor"))


// Manipulando Strings e Arrays

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso,transforme o array em um texto e onde eram espaços, coloque _

let phrase2 = "Eu quero viver o Amor!"

let myArray = phrase2.split(" ")

let phraseWithUnderscore = myArray.join("_")

console.log(phraseWithUnderscore)


// Criar Array com construtor

let myArray2 = new Array('a','b','c')
console.log(myArray2)


// Contar elementos de um array

console.log(["a", "b", "c"].length)


// Transformar uma cadeia de caracteres em elementos de um array

let new_word = "manipulação"
console.log(Array.from(new_word))
