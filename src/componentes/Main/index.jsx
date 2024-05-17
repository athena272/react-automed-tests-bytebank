import styles from './Main.module.css';
import Ilustracao from './ilustracao.svg';
import Balance from './Balance';
import PropTypes from 'prop-types';

const data = Date.now();
const hoje = new Date(data);
const diasDaSemana = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];


Main.propTypes = {
  saldo: PropTypes.number
}

export default function Main({ saldo }) {
  return (
    <section className={styles.container}>
      <div className={styles.detalhe__superior} />
      <h1 className={styles.titulo}>Olá, Joana :)!</h1>
      <p className={styles.data}>{`${diasDaSemana[hoje.getDay()]
        }, ${hoje.toLocaleDateString('pt-BR')}`}</p>
      <div className={styles.wrapper}>
        <img src={Ilustracao} className={styles.ilustracao} width={230} height={185} alt='Icone Saldo'/>
        <Balance saldo={saldo} />
      </div>
      <div className={styles.detalhe__inferior} />
    </section>
  );
}
