import Integrante from '@/components/Integrante'
import styles from '@/components/integrantes.module.css'

function PagTeste() {
    return (
        <div className={styles.container}>
            <Integrante nome="Arthur Santos" idade="17" movimento="Rococó" />
            <Integrante nome="Isabeli D'grande" idade="16" movimento="Rococó" />
            <Integrante nome="Sofia  Caun" idade="17" movimento="Rococó" />
            <Integrante nome="Arthur Santos" idade="17" movimento="Rococó" />
            <Integrante nome="Isabeli D'grande" idade="16" movimento="Rococó" />
            <Integrante nome="Sofia  Caun" idade="17" movimento="Rococó" />
        </div>
    )
}

export default PagTeste