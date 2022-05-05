import { Link } from "react-router-dom"
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul className={styles.list}>
                <li className={styles.item}><Link className={styles.link} to="/">Home</Link></li>
                <li className={styles.item}><Link className={styles.link} to="/empresa">Empresa</Link></li>
                <li className={styles.item}><Link className={styles.link} to="/contato">Contato</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
