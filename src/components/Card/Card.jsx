import React from 'react'
import Button from '../Button/Button'
import S from './Card.module.css'

const Card = ({ img,nomeProduto, descricao, desconto, de, por, parcela, ou }) => {
  return (
    <article className={S.card} >
      <picture className={S.img}>
        <img src={img}  alt="produto" />
      </picture>
      <h3 className={S.h3}>{nomeProduto}</h3>
      <h4 className={S.h4}>{descricao}</h4>
      <h5 className={S.desconto}>{desconto}</h5>
      <h4 className={S.h4}>De: R$ {de},00</h4>
      <h5 className={S.h5}>Por: R$ {por},00</h5>
      <p className={S.parcela}>ou {parcela}x de: R$ {ou}</p>
      <Button style={S.button} texto="Comprar" />
    </article>
  );
};

export default Card