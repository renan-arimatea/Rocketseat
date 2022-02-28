import Item from "./Item"

function List () {
    return (
        <>
            <h3>Minha Lista</h3>

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
