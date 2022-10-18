import { useState } from 'react'
import { contarRetangulo } from "../../services"



export default function LinhasRetangulo(){

    const[linhas, setLinhas] = useState(0)
    const [coluna, setColuna] = useState()
    const [resp, setResp] = useState()

    function CalculoRetangulo(linhas, coluna, simb) {
        try {
            let final = contarRetangulo (linhas, coluna, simb)
            setResp (final)

        } catch(err){
            setResp (err.message ) 
        }


     }
    
    return(
        <main className='page-orcamento'>
            <h1>Desenho Retângulo</h1>

            Linhas: <input type='number' value={linhas} onChange = { e => setLinhas (Number (e.target.value)) }/>
            Coluna: <input type='number' value={coluna} onChange = { e => setColuna (Number (e.target.value)) }/>

            <button onClick={ CalculoRetangulo } > Calcular </button>
            {resp}
        </main>
    )
 }   