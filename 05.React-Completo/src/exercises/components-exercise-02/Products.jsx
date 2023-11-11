import React from 'react'
import Title from './Title';
import Product from './Product';


const Products = () => {
  
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  return (
    <section>
      <Title text="Produtos" />
      {produtos.map((produto) => (
        <Product key={produto.nome} {...produto} />
      ))}
    </section>
  )
}

export default Products