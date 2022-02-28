function  Pessoa ({foto, nome, idade, profissao}) {
    return (
        <div>
            <img src={foto} alt={nome} />
            <h3>Nome: {nome}</h3>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa

// function  Pessoa (props) {
//     return (
//         <div>
//             <img src={props.foto} alt={props.nome} />
//             <h2>Nome: {props.nome}</h2>
//             <p>Idade: {props.idade}</p>
//             <p>Profissão: {props.profissao}</p>
//         </div>
//     )
// }

// export default Pessoa
