import ItemList from "./ItemList"

function List() {
    return (
        <>
            <h1>Lista</h1>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <ItemList item={'item 3'} />
                <ItemList item={'item 4'} />                
            </ul>
        </>
    )
}

export default List