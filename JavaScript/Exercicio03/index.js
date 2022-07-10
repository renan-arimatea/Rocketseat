/* ### Transformar notas escolares

Crie um algoritom que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F

*/
{
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
}

/*  ### SItema de Gastos Familiares

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:

    * receitas: [] 

    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.

*/

// Minha Resposta

{
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
}

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

/* ### Celsius em Fahrenheit - vice/versa

Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32

*/

// transformDegree('50F')

const transformDegree = (degree) => {

    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')


    // fluxo de erro

    if(!celsiusExists && !fahrenheitExists) {
        throw new Error("Grau não identificado")
    }

    // fluxo ideal F -> C

    let updatedDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = "C"


    // fluxo alternativo C -> F

    if(celsiusExists) {

        updatedDegree = Number(degree.toUpperCase().replace("C", ""))
        formula = (celsius) => celsius * 9/5 + 32
        degreeSign = "F"
    }

    return formula(updatedDegree) + degreeSign

}

try {

    console.log(transformDegree("10C"))
    console.log(transformDegree("50F"))
    console.log(transformDegree("50Z"))

} catch (error) {

    console.log(error)
} 


/* ∞ Buscando e contando dados em Arrays ∞

    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];


const totalCategories = booksByCategory.length;

console.log(totalCategories);

for(let category of booksByCategory) {

    console.log("Total de livros da categoria: ", category.category)
    console.log(category.books.length)
}

const countAuthors = () => {

    let authors = []

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", authors.length)

}

countAuthors()


const booksOfAuthor = (author) => {

    let books = []

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)

}

booksOfAuthor("Augusto Cury")
booksOfAuthor("George S. Clason")
