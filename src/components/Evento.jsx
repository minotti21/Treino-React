import Button from "./Button"

function Evento() {

    function primeiroEvento() {
        console.log('Ativando primeiro evento')
    }

    function segundoEvento() {
        console.log('Ativando segundo evento')
    }

    return (
        <>
            <p>Clique abaixo para dar um console.log</p>
            <Button event={primeiroEvento} text={'Clique'} />
            <Button event={segundoEvento} text={'Aqui'} />
        </>
    )
}

export default Evento
