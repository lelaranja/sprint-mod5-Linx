import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Label from "../Label/Label";
import S from "./FormBottom.module.css";

const FormBottom = () => {
  return (
    <div>
      <form >
        <div className={S.mainForm}>
          <div>
            <Label texto="Nome do seu amigo:" />
            <Input tipo="text" obrigatorio={true} />
          </div>
          <div>
            <Label texto="E-mail:" />
            <Input tipo="email" obrigatorio={true} />
          </div>
        </div>
        <div className={S.btn}>
          <Button texto="Enviar agora" />
        </div>
      </form>
    </div>
  );
};

export default FormBottom;
