function SeuNome({ setNome }) {

    return (
        <div>
            <p>Digite seu nome: </p>
            <input type="text" onChange={(e) => {
                setNome(e.target.value)
            }} placeholder="Qual seu nome?" />
        </div>
    )
}

export default SeuNome
