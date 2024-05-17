import styles from './Extract.module.css';
import Transactions from './Transactions';
import PropTypes from 'prop-types';

Extract.propTypes = {
  transacoes: PropTypes.array
}

export default function Extract({ transacoes }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.titulo}>Extrato</h2>
      <ul>
        {transacoes.map((transacao, indice) => {
          return (
            <Transactions
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
