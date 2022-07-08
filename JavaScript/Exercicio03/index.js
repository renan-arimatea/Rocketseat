/* ### Transformar notas escolares

Crie um algoritom que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F

*/

const calcularNota = (nota) => {

    if (nota >=90 && nota <= 100) {
        console.log("A")

    } else if (nota >=80 && nota <= 89) {
        console.log("B")

    } else if (nota >=70 && nota <= 79) {
        console.log("C")

    } else if (nota >=60 && nota <= 69) {
        console.log("D")

    } else if (nota < 60 && nota >= 0) {
        console.log("F")

    } else {
        console.log("Nota Inválida")
    }

}

calcularNota(100)


/*  ### SItema de Gastos Familiares

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:

    * receitas: [] 

    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.

*/


let receitas = [1200.00, 500.00, 300.00]

let despesas = [400.00, 50.00, 75.00, 500.00, 60.00]


// somando as receitas do array

let somaReceitas = 0

for (let i = 0; i < receitas.length; i++) {
    somaReceitas += receitas[i]
}

console.log(somaReceitas)


// somando as despesas do array

let somaDespesas = 0

for (let i = 0; i < despesas.length; i++) {
    somaDespesas += despesas[i]
}

console.log(somaDespesas)


// função que calcula Receitas - Despesas

const fluxoDeCaixa = () => {

    let orcamento

    orcamento = somaReceitas - somaDespesas

    return orcamento

}

console.log(fluxoDeCaixa())


// Resposta Professor 

{

    let familia = {
        receitas: [1200.00, 500.00, 300.00],
        despesas: [400.00, 50.00, 75.00, 500.00, 60.00]
    }

    const soma = (array) => {
        let total = 0

        for(let value of array) {
            total += value
        }

        return total
    }

    const calcularBalanco = () => {
        const calculaReceitas = soma(familia.receitas)
        const calculaDespesas = soma(familia.despesas)

        const total = calculaReceitas - calculaDespesas

        const tudoCerto = total >= 0

        let textoDoBalanco =  "negativo"

        if (tudoCerto) {
            textoDoBalanco = "positivo"
        }

        console.log(`Seu saldo é ${textoDoBalanco}: R$ ${total.toFixed(2)}`)
    }

    calcularBalanco()
}