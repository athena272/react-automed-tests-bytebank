import styles from './Balance.module.css';
import Icone from './icone-olho.svg';
import PropTypes from 'prop-types';

Balance.propTypes = {
  saldo: PropTypes.number
}

export default function Balance({ saldo }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.saldo}>Saldo</h2>
        <img src={Icone} alt='Icone olhar saldo' width={20} height={14}/>
      </div>
      <div className={styles.divisor} />
      <p className={styles.conta}>Conta corrente</p>
      <p className={styles.valor}>{`R$ ${saldo}`}</p>
    </div>
  );
}
