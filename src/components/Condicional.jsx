import { useState } from "react"

function Condicional() {

    const [email, setEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        console.log(email)
    }

    return (
        <div>
            <h1>Cadastre seu e-mail: </h1>
            <form>
                <input type="email" placeholder="Digite seu e-mail:" />
                <button onClick={enviarEmail} onChange={(e) => {
                    setEmail(e.target.value)
                }}>Enviar e-mail</button>
            </form>
        </div>

    )
}

export default Condicional