function Evento () {

    function meuEvento () {
        alert("Fui ativado!")
    }
    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento
