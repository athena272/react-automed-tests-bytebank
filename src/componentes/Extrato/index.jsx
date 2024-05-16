import styles from './Extrato.module.css';
import Transacoes from './Transacoes';
import PropTypes from 'prop-types';

Extrato.propTypes = {
  transacoes: PropTypes.array
}

export default function Extrato({ transacoes }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.titulo}>Extrato</h2>
      <ul>
        {transacoes.map((transacao, indice) => {
          return (
            <Transacoes
              key={indice}
              transacao={transacao}
              estilos={styles}
            />
          );
        })}
      </ul>
    </section>
  );
}
