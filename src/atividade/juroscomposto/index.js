import { jurosComposto } from '../../services'
import { useState } from 'react'
import './index.scss'


export default function Juros() {
    const [capital,setCapital] = useState ()
    const [valor,setValor] = useState ()
    const [taxa,setTaxa] = useState ()
    const [periodo,setPeriodo] = useState ()
    const [resp,setResp] = useState ([])

     function CalcularJuros() {
        try {
            let final = jurosComposto (capital, valor, taxa, periodo)
            setResp (final)

        } catch(err){
            setResp (err.message ) 
        }


     }

    return(
        <main className='page-orcamento'>
            <h1>Juros Composto</h1>

            Capital: <input type='number' value={capital} onChange = { e => setCapital (Number (e.target.value)) }/>

            Valor: <input type='number' value ={valor} onChange = {e => setValor (Number (e.target.value))}/>

            Taxa: <input type='number' value ={taxa} onChange = {e => setTaxa (Number (e.target.value))}/>

            Periodo: <input type='number' value ={periodo} onChange = {e => setPeriodo (Number (e.target.value))}/>
        

            <button onClick={ CalcularJuros } > Calcular Juros </button>
            {resp.map (item => 
                <div>{item}
                </div>)}
        </main>
    )
}