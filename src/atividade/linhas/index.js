import { useState } from "react"
import { contarLinhas } from "../../services"

export default function Linhas(){

    const[tamanho, setTamanho] = useState(0)
    const [resp, setResp] = useState()

    function Calculo() {
        try {
            let final = contarLinhas (tamanho)
            setResp (final)

        } catch(err){
            setResp (err.message ) 
        }


     }
    
    return(
        <main className='page-orcamento'>
            <h1>Contar linhas</h1>

            Tamanho: <input type='number' value={tamanho} onChange = { e => setTamanho (Number (e.target.value)) }/>

            <button onClick={ Calculo } > Calcular </button>
            {resp}
        </main>
    )
 }   