import React from 'react'

import Products from './Products';
import Header from './Header';
import Home from './Home';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const App = () => {

  const { pathname } = window.location
  
  let Page;
  if (pathname === '/Products') {
    Page = Products
  } else {
    Page = Home
  }

  return (
    <React.Fragment>
      <Header />
      <Page />
    </React.Fragment>
  )
};


export default App
