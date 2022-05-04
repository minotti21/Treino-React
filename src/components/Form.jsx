import { useState } from "react"

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário "${name}" cadastrado com a senha: "${password}"`)
    }

    const [name, setName] = useState("Vinicius")

    const [password, setPassword] = useState("")

    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label 
                    htmlFor="name">Nome: </label>
                    <input
                    onChange={(e) => {setName(e.target.value)}} 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="Digite Seu Nome"
                    />
                </div>
                <div>
                    <label htmlFor="passsword">Senha: </label>
                    <input
                    onChange={(e) => {setPassword(e.target.value)}} 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Digite Sua Senha" 
                    />
                </div>
                <div>
                    <input 
                    type="submit" 
                    value="Cadastrar" 
                    />
                </div>
            </form>
        </div>
    )
}

export default Form