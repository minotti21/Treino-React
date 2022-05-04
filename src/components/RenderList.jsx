function RenderList({ lista }) {
    return (
        <>
            <h1>Lista de Pessoas</h1>
            {lista.length > 0 ? (
                lista.map(({ id, nome, idade, peso }) => (
                    <div key={id}>
                        <h2>Pessoa {id}</h2>
                        <p>Nome: {nome}</p>
                        <p>Idade: {idade}</p>
                        <p>Peso: {peso}</p>
                    </div>
                ))) : (
                <p>Não há itens na lista.</p>
            )}
        </>
    )
}

export default RenderList
