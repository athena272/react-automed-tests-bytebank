import styles from './Transaction.module.css';
import Ilustracao from './ilustracao.svg';
import Form from './Form';
import PropTypes from 'prop-types';

Transaction.propTypes = {
  realizarTransacao: PropTypes.func
}

export default function Transaction({ realizarTransacao }) {
  return (
    <section className={styles.container}>
      <div className={styles.detalhe__superior} />
      <div className={styles.wrapper}>
        <Form realizarTransacao={realizarTransacao} />
      </div>
      <img src={Ilustracao} width={310} height={229} />
      <div className={styles.detalhe__inferior} />
    </section>
  );
}
