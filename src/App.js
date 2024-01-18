//import { useState } from 'react';
import Header from './components/Header';
//import Main from './pages/Main';
import { Article } from './components/Article';
//import Routes from './routes';

function App() {
  // let [carrinho, setCarrinho] = useState(0);
  // function addItem() {
  //   setCarrinho(carrinho + 1);
  // }
  // function removeItem() {
  //   if (carrinho > 0) {
  //     setCarrinho(carrinho - 1);
  //   }
  // }
  return (
    <>
      <Header />
      <Article />

      {/* <h1>Carrinho de compra: {carrinho}</h1> */}
      {/* <div className="flex">
        <button className="ml-2 add-button" onClick={addItem}>
          +
        </button>
        <button className="ml-2 remove-button" onClick={removeItem}>
          -
        </button>
      </div> */}
    </>
  );
}

export default App;
