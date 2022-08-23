import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Label from "../Label/Label";
import S from "./form.module.css";

const Form = () => {

  return (
    <div>
      <form className={S.form}>
        <Label texto="Seu nome" />
        <Input tipo="text" obrigatorio={true} />
        <Label texto="E-mail" />
        <Input tipo="email" obrigatorio={true} />
        <Label texto="CPF" />
        <Input tipo="number" obrigatorio={true}/>
        <div className={S.radio}>
          <Input tipo="radio" valor="Masculino" obrigatorio={true} />
          <Label texto="Masculino"/>
          <Input tipo="radio" valor="Feminino" obrigatorio={true} />
          <Label texto="Feminino" />
        </div>
        <Button texto="Enviar"/>
      </form>
    </div>
  );
};

export default Form;
