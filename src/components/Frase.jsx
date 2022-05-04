import styles from './Frase.module.css'

function Frase({text}) {
    return <p className={styles.paragraph}>{text}</p>
}

export default Frase
