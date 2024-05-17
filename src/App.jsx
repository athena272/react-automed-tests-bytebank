import { useState } from "react";
import styles from "./App.module.css";
import { calculaNovoSaldo } from "./utils";

import Header from "./componentes/Header";
import Extract from "./componentes/Extract";
import Menu from "./componentes/Menu";
import Main from "./componentes/Main";
import Transaction from "./componentes/Transaction";

export default function App() {
  const [saldo, setSaldo] = useState(1000);
  const [transacoes, setTransacoes] = useState([]);

  function realizarTransacao(valores) {
    const novoSaldo = calculaNovoSaldo(valores, saldo);
    setSaldo(novoSaldo);
    setTransacoes([...transacoes, valores]);
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
        <Menu />
        <div className={styles.wrapper}>
          <Main saldo={saldo} />
          <Transaction realizarTransacao={realizarTransacao} />
        </div>
        <Extract transacoes={transacoes} />
      </main>
    </>
  );
}
