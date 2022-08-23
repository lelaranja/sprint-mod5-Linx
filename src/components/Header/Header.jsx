import React from 'react'
import Button from '../Button/Button'
import S from './header.module.css'

const Header = () => {
  return (
    <div className={S.header}>
    <header>
      <p>uma seleção de produtos</p>
      <h2>especial para você</h2>
      <p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
    </header>
    <div className={S.btns}>
      <Button texto="Conheça a Linx"/>
      <Button texto="Ajude o algoritmo"/>
      <Button texto="Seus produtos"/>
      <Button texto="Compartilhe"/>
    </div>
    </div>
  )
}

export default Header