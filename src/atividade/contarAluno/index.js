import { contarAlunos } from '../../services'
import './index.scss'
import { useState } from 'react'

export default function Conte() {

    const [fim, setFim] = useState('')
  
    const [resp, setResp] = useState([])

     function calcularFim() {
        try {
            let final = contarAlunos (fim)
            setResp (final); console.log (final)

        } catch(err){
            setResp (err.message ) 
        }


     }


    return (
        <main>
            <h1>Contar Itens</h1>

            Quantidade de alunos: <input type='number' value={fim} onChange={e => setFim(Number(e.target.value))} />


            <button onClick={calcularFim} > Calcular </button>
            {resp.map(item =>
                <div>
                    Aluno:{item} <input type= 'text'/>
                </div>)}

        </main>
    )

}