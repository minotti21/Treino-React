
import Frase from "./Frase"

function HelloWorld() {
    return (
        <div>
            <h1>Olá Mundo</h1>
            <Frase text={'frase 1'}/>
            <Frase text={'frase 2'}/>
            <Frase text={'frase 3'}/>
        </div>
    )
}

export default HelloWorld
