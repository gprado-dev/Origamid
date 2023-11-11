import React from 'react'

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];


const App = () => {

  const dados = produtos.filter(
    ({ preco }) => 
      Number(preco.replace('R$ ', '')) > 100)
  
  return (
    <section style={{display: "flex", gap: "8px", flexWrap: "wrap"}}>
      {dados
        .map(({id, nome, preco, cores}) => 
          <div key={id} style={{
            backgroundColor: "#eee",
            boxSizing: "border-box",
            padding: "24px",
            flex: "1",
            borderRadius: "16px",
            border: "1px solid #ccc",
          }}>
            <h2>{nome}</h2>
            <p>Preço: {preco}</p>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",

            }}>
              {cores.map((cores) => 
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "16px",
                    backgroundColor: cores,
                    color: "white",
                    height: "40px",
                  }}>
                      {cores}
                  </div>
                )}
            </div>
          </div>
          )
      }
    </section>
  );
};


export default App
