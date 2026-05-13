import { useState } from 'react'
import Calculadora from './components/Calculadora'
import './App.css'
import TabelaImc from './components/TabelaImc';
import { data } from './data/data';

function App() {
  const [imc, setImc] = useState("");
  const [imcInfo, setImcInfo] = useState("");
  const [imcInfoClass, setImcInfoClass] = useState("");

  const calcImc = (e, height, weight) => {

    e.preventDefault();
    if(!height || !weight) return;

    const heightFloat = +height.replace(",", ".")
    const weightFloat = +weight.replace(",", ".")

    const result = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    setImc(result);

    data.forEach((item) => {
      if(result >= item.min && result <= item.max) {
        setImcInfo(item.info);
        setImcInfoClass(item.infoClass);
      }
    });

    if(!info) return;
  };

  const resetImc = (e) => {
    setImc("");
    setImcInfo("");
    setImcInfoClass("");
  }

  return (
    <>
      <div className="container">
        {!imc ?
        <Calculadora calcImc={calcImc}/>
        :
        <TabelaImc data={data} resetImc={resetImc} imc={imc} infoClass={imcInfoClass} info={imcInfo}/>  
      }
        
      </div>
    </>
  )
}

export default App
