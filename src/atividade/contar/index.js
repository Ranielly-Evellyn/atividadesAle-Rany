import { useState } from "react"
import { totalContar } from "../../services"


export default function Contar(){

    const [inicio, setInicio] = useState ()
    const [fim, setFim] = useState ()
    const[resp, setResp] = useState([])

    function calcularFim() {
        try {
            let final = totalContar (inicio, fim)
            setResp (final)

        } catch(err){
            setResp (err.message ) 
        }


     }

    
    return(
        <main>
            <h1>Contar</h1>

            Início: <input type='number' value={inicio} onChange = { e => setInicio (Number (e.target.value)) }/>

            Fim: <input type='number' value ={fim} onChange = {e => setFim (Number (e.target.value))}/>

            <button onClick={ calcularFim } > Calcular </button>
            {resp.map (item =>
        <div>
            {item}
            </div>
            )}
        </main>
    )
}