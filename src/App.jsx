import React, { useState } from 'react';
import './App.css';
import TransformedComponent from './components/transform/Transform';
import HeaderFormBank from './components/transform/transformHeader/HeaderBank';

function App() {
  const [passValueBank, setPassValueBank] = useState('');
  const [passValueShop, setPassValueShop] = useState('');
  const [borderErro, setBorderErro] = useState(false);
  
  const handleChangeBank = (e) => {
    setPassValueBank(e.target.value);
  }
  
  const handleChangeShop = (e) => {
    setPassValueShop(e.target.value);
    console.log(passValueShop.length)
  }

  return (
    <div className='container'>
      <HeaderFormBank />
      <TransformedComponent 
        valuePassBank={passValueBank}
        
        setValueShop={setPassValueShop}
        valuePassShop={passValueShop}
        setBorderErro={setBorderErro}
        borderErro={borderErro}

        inputPassBank={() => (
          <input 
            type='password' 
            placeholder='Confirm password'
            value={passValueBank} 
            onChange={handleChangeBank}
            required
          />
        )} 
        inputPassShop={() => (
          <input 
            className={borderErro && passValueShop.length > 0 ? "border-red" : ""}
            type='password' 
            placeholder='password'
            value={passValueShop} 
            onChange={handleChangeShop}
            required
          />
        )} 
        />
    </div>    
  );
}

export default App;
