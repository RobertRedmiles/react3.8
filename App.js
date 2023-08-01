import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './routes/Header';
import View from './routes/View';
import Add from './routes/Add';
import { useState } from 'react';
import { dummyData } from './data';
import Item from './routes/Item';
import ItemDefault from './routes/ItemDefault';

function App() {
  const DefaultPage = () => <p>Page Not Found!</p>;
  const[list, setList] = useState(dummyData)
  const handlerDeleteProduct = (id) => {
    const newList = list.filter(
      (item) => item.id !== id
    );
    setList(newList);
  }

  const handlerAddProduct = (newProduct) => {
    dummyData.push(newProduct);
    console.log(dummyData)
    setList(dummyData)
  }

  return (
    <div className='App'>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route path='view' element={<View list={list} />}>
              <Route index element={<ItemDefault />} />
              <Route path=':id' element={<Item list={list} handlerDelete={handlerDeleteProduct} /> }/>
            </Route>
            <Route path='add' element={<Add handlerAddProduct={handlerAddProduct}/>} />
          </Route>
          <Route path='*' element={<DefaultPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

