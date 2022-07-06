// Manipulando Arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim

techs.push("nodeJs")

// adicionar um item no começo

techs.unshift("sql")

// remover um item do fim

techs.pop()

// remover um item do começo

techs.shift()

// pegar somente alguns elementos do array

console.log(techs.slice(1, 3))

// remover 1 ou mais items em qualquer posição do array

techs.splice(1, 1)

// encontrar a posição de um elemento no array

let index = techs.indexOf("html")
console.log(index)

console.log(techs)
