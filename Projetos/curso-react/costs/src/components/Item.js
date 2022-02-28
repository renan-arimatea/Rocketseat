import propTypes from "prop-types"

function Item ({marca, ano_lancamento})  {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: propTypes.string.isRequired,
    ano_lancamento: propTypes.number,
}

Item.defaultProps = {
    marca: "Faltou a marca",
    ano_lancamento: 0,
}

export default Item
