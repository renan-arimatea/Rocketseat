import Item from "./Item"

function List () {
    return (
        <>
            <h1>Minha Lista</h1>

            <ul>
                <Item marca="Nike" ano_lancamento={1920}/>
                <Item marca="Adidas" ano_lancamento={1935}/>
                <Item marca="Puma" ano_lancamento={1949}/>
                <Item/>
            </ul>
        
        </>
    )
}

export default List
