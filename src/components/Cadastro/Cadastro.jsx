import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Label from '../Label/Label'

const Cadastro = () => {
  return (
    <article>
        <h3>Compartilhe a novidade</h3>
        <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
        <Label texto="Nome do seu amigo"/>
        <Input/>
        <Label texto="Nome do seu amigo"/>
        <Input/>
        <Button texto="Enviar agora"/>
    </article>
  )
}

export default Cadastro