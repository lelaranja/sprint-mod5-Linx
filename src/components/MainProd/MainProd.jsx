import { useState, useEffect } from "react";
import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Form from "../Form/Form";
import FormBottom from "../FormBottom/FormBottom";
import TextAs from "../TextAs/TextAs";
import S from "./Main.module.css";

const MainProd = () => {
  const [informacoes, setInformacoes] = useState([]);
  const [pagina, setPagina] = useState(1);

  const handleRequest = async () => {
    const response = await fetch(
      `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${pagina}`
    );
    const json = await response.json();
    setInformacoes([...informacoes, ...json.products]);
  };

  const proximaPag = () => {
    setPagina(pagina + 1);
  };

  useEffect(() => {
    handleRequest();
  }, [pagina]);

  return (
    <div>
      <section className={S.secOne}>
        <TextAs />
        <Form />
      </section>
      <div className={S.divOne}>
        <hr />
        <div className={S.textSelEsp}>
          <h3>Sua seleção especial!</h3>
        </div>
        <hr />
      </div>
      <section className={S.cards}>
        {informacoes.length > 0 &&
          informacoes.map((item, index) => {
            return (
              <Card
                key={index}
                img={item.image}
                nomeProduto={item.name}
                descricao={item.description}
                de={item.oldPrice}
                por={item.price}
                parcela={item.installments.count}
                ou={item.installments.value}
              />
            );
          })}
      </section>
      <div className={S.btnAdd}>
        <Button texto="Ainda mais produtos aqui!" onClick={proximaPag} />
      </div>
      <div className={S.divTwo}>
        <hr />
        <div className={S.textNovidade}>
          <h3>Compartilhe a novidade</h3>
        </div>
        <hr />
      </div>
      <section>
        <FormBottom />
      </section>
    </div>
  );
};

export default MainProd;
