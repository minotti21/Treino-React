function Saudacao({ nome }) {

    function gerarSaudacao(algumNome) {
        return `Olá ${algumNome}, tudo bem?`
    }

    return (
        <div>
            {nome && (
                <h2>{gerarSaudacao(nome)}</h2>
            )}
        </div>
    )


}

export default Saudacao
