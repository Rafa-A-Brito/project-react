import React from "react";

const App2 = () => {
  return <div>App2</div>;
};

export default App2;

// rafce - react arrow function component export
// // Arrow Function
// const App2 = () => <h1>Olá Mund</h1>;

//nomeação de componentes - Pascal Case
// export default, posso importar com qualquer nome e sem chaves
//export "sem default", só posso importat entre chaves e com nome exportado

//Nomeação de variávelm, função...
//camel Case
//Self closing tag
// <Header></Header> --> <Header />

// Nomeação de classes
// kebab-case
// Padding = espaçamento interno

// element.style{
//     background-color: antiquewhite;
//     padding: 20px;
//     margin:  20px;
//     border: solid 5px black;
//     /*box-sizing: content-box*/
//     width: 500px;
// }

// Nomeação de classes em CSS
// Metodologia BEM
// B - Blocks
// E - Elements
// M - Modifiers
// bloco__elemento--modificador
// header__link-- small
// Nomes compostos separados por -
// Tag vazia em React se chama fragment ou fragmento

//componentes recebem "props" - parâmetros; argumentos que a função recebe

// {items === 5 ? (
//         <>
//         <SingleItem/>
//         <SingleItem/>
//         <SingleItem/>
//         <SingleItem/>
//         <SingleItem/>
//       </>
//       ) : (
//       <>
//         <SingleItem/>
//         <SingleItem/>
//         <SingleItem/>
//         <SingleItem/>
//         <SingleItem/>
//         <SingleItem/>
//         <SingleItem/>
//         <SingleItem/>
//         <SingleItem/>
//         <SingleItem/>
//       </>
//       )}

// <div className="item-list__container">
//         {Array(items)
//           .fill()
//           .map((currentValue, index) => (
//             <SingleItem key={`${title}-${index}`} />
//           ))}
//       </div>

// Spread operator
// ... - valores do objeto, não o seu endereço na máquina

// Quando componentes se re-renderizam

// Uma das ocasiões é quando um variável de estado usada por esse componente é atualizada

// HOOK React - useState()
