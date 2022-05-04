import { useState } from 'react';
import './App.css';
import Saudacao from './components/Saudacao';
import SeuNome from './components/SeuNome';

function App() {

  const [nome, setNome] = useState()

  return (
    <div className="App">
      <SeuNome teste={setNome} />
      <Saudacao nome={nome}/>
    </div>
  );
}

export default App;
