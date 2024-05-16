import styles from './Menu.module.css';

const listaMenu = [
  'Inicial',
  'Transferências',
  'Investimentos',
  'Outros serviços',
];

export default function Menu() {
  return (
    <nav className={styles.menu}>
      {listaMenu.map((item, indice) => {
        return (
          <div key={item} className={styles.item}>
            <a href="/" className={styles.link}>
              {item}
            </a>
            {indice !== listaMenu.length - 1 && (
              <div className={styles.divisor} />
            )}
          </div>
        );
      })}
    </nav>
  );
}
