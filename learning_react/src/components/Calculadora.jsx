import { useState } from "react"
import "./Calculadora.css"
import Botao from './Botao'

const Calculadora = ({calcImc}) => {

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const limparCampos = (e) => {
        e.preventDefault();
        setHeight("");
        setWeight("");
    };

    const formataDados = (e) => {
        return e.target.value.replace(/[^0-9,]/g, "");
    }

    const handleHeightChange = (e) => {

        const inputValue = formataDados(e);

        setHeight(inputValue);
    }

    const handleWeightChange = (e) => {

        const inputValue = formataDados(e);

        setWeight(inputValue);
    }

    

  return (
    <div id="calc-container">
        <h2>Calcule o seu IMC</h2>
        <form  id="calc-form">
            <div id="form-inputs">
                <div id="form-input">
                    <label htmlFor="height">Altura:</label>
                    <input type="text" name='heigth' id='heigth' placeholder='ex: 1,75' onChange={handleHeightChange} value={height}/>
                </div>
                <div id="form-input">
                    <label htmlFor="weight">Peso:</label>
                    <input type="text" name='weight' id='weight' placeholder='ex: 87,5' onChange={handleWeightChange} value={weight}/>
                </div>
                <div id="form-control">
                    <Botao id="btn-calc" text="Calcular" action={(e) => calcImc(e, height, weight)}/>
                    <Botao id="btn-limpar" text="Limpar" action={limparCampos}/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Calculadora