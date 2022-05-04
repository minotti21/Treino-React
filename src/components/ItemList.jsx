import PropTypes from 'prop-types'


function ItemList({item}) {
    return(
        <>
            <li>{item}</li>
        </>
    )
}

ItemList.propTypes = {
    item: PropTypes.string
}

export default ItemList
