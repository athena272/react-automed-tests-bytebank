import styles from "./Header.module.css";
import Logo from "./bytebank.svg";
import avatarUsuario from "./avatar.svg";

export default function Header() {
  return (
    <header className={styles.cabecalho}>
      <div className={styles.container}>
        <img src={Logo} alt="Logo bytebank" width={146} height={32} />
        <div className={styles.usuario}>
          <p>Joana Fonseca Gomes</p>
          <img src={avatarUsuario} className="userIcon" alt="Ícone de um avatar de usuário" />
        </div>
      </div>
    </header>
  );
}
