import styles from './Transacao.module.css';
import Ilustracao from './ilustracao.svg';
import Formulario from './Formulario';
import PropTypes from 'prop-types';

Transacao.propTypes = {
  realizarTransacao: PropTypes.func
}

export default function Transacao({ realizarTransacao }) {
  return (
    <section className={styles.container}>
      <div className={styles.detalhe__superior} />
      <div className={styles.wrapper}>
        <Formulario realizarTransacao={realizarTransacao} />
      </div>
      <img src={Ilustracao} width={310} height={229} />
      <div className={styles.detalhe__inferior} />
    </section>
  );
}
