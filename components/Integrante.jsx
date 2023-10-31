import styles from './integrantes.module.css'

function Integrante(props) {
    return (
        <div className={styles.card}>
            <div className={styles.imgBx}>
                <img src="/user.png" />
            </div>
            <div className={styles.content}>
                <h3>Nome: {props.nome}</h3><br />
                <h3>Idade: {props.idade}</h3><br />
                <h3>Movimento preferido: {props.movimento}</h3>
            </div>
        </div>
    )
}

export default Integrante