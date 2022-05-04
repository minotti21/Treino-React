import { useState } from "react"
import Button from "./Button"

function Condicional() {

    const [email, setEmail] = useState()

    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail() {
        setUserEmail("")
    }

    return (
        <div>
            <h1>Cadastre seu e-mail: </h1>
            <form>
                <input type="email"
                    placeholder="Digite seu e-mail:"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                <Button
                    event={enviarEmail}
                    text={'Enviar e-mail'} />
                {userEmail && (
                    <div>
                        <p>E-mail "{userEmail}" cadastrado com sucesso!</p>
                        <Button text={'Limpar E-mail'} event={limparEmail} />
                    </div>
                )}
            </form>
        </div>

    )
}

export default Condicional