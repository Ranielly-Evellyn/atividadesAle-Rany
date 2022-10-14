import { useState } from 'react'
import './index.scss'
import {OrcamentoFamiliar} from '../../services/index'


export default function Orcamento() {
    const [gastos,setGastos] = useState (0)
    const [ganhos,setGanhos] = useState (0)
    const [resp,setResp] = useState ()

     function Calculo() {
        try {
            let final = OrcamentoFamiliar (ganhos, gastos)
            setResp (final)

        } catch(err){
            setResp (err.message ) 
        }


     }
    
    

    return(
        <main className='page-orcamento'>
            <h1>Orçamento</h1>

            Ganhos: <input type='number' value={ganhos} onChange = { e => setGanhos (Number (e.target.value)) }/>

            Gastos: <input type='number' value ={gastos} onChange = {e => setGastos (Number (e.target.value))}/>

            <button onClick={ Calculo } > Calcular </button>
            {resp}
        </main>
    )
}