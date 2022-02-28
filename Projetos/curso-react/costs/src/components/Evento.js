import Button from "./evento/Button"

function Evento () {

    function meuEvento () {
        console.log("Ativando o Primeiro Evento")
        alert("Fui ativado!")
    }

    function segundoEvento () {
        console.log("Ativando o Segundo Evento")
    }
    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento
