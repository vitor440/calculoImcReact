import React from 'react'

import "./TabelaImc.css"
import Botao from './Botao'

const TabelaImc = ({data, resetImc, imc, infoClass, info}) => {

  return (
    <div id="tabela-imc">
        {console.log(data)}
        <h3>Seu IMC: <span>{}</span>{imc}</h3>
        <p id="imc-info">
            Situação atual: <span className={infoClass}>{info}</span>
        </p>
        <p>Tabela de Referência</p>
        <div className="tableImc">
            <div id="table-header">
            
                <h4>IMC</h4>
                <h4>Classificação</h4>
                <h4>Obesidade</h4>
                
            </div>
            {data.map((item) => (
                <div id="table-data" key={item.info}>
                    <p>{item.classification}</p>
                    <p>{item.info}</p>
                    <p>{item.obesity}</p>
                </div>
            ))}
            
        </div>

        <Botao id="btn-voltar" text="Voltar" action={(e) => resetImc(e)}/>
    </div>
  )
}

export default TabelaImc