import { useState } from "react";
import styles from "./Form.module.css";
import PropTypes from "prop-types";

Form.propTypes = {
  realizarTransacao: PropTypes.func,
};

export default function Form({ realizarTransacao }) {
  const [valor, setValor] = useState({ transacao: "", valor: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    const valoresAtualizados = { ...valor, [name]: value };
    setValor(valoresAtualizados);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const dataTransacao = new Date().toLocaleDateString("pt-br");
    const mesTransacao = new Date().toLocaleDateString("pt-br", {
      month: "long",
    });
    realizarTransacao({
      ...valor,
      data: dataTransacao,
      mes: mesTransacao[0].toUpperCase() + mesTransacao.substring(1),
    });
    setValor({ ...valor, valor: "" });
  }

  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <h3 className={styles.legenda__opcoes}>Nova Transação</h3>
      <select
        className={styles.grupo__opcoes}
        onChange={handleChange}
        name="transacao"
        data-testid="select-opcoes"
      >
        <option defaultValue="Selecione um tipo de transação">
          Selecione um tipo de transação
        </option>
        <option value="Depósito">Depósito</option>
        <option value="Transferência">Transferência</option>
      </select>
      <label htmlFor="valor" className={styles.legenda}>
        Valor
      </label>
      <input
        onChange={handleChange}
        className={styles.campo__valor}
        type="number"
        value={valor.valor}
        name="valor"
        id="valor"
        placeholder="Digite um valor"
      />
      <button className={styles.botao} type="submit">
        Realizar transação
      </button>
    </form>
  );
}
