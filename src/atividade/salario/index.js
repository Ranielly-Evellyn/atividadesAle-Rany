import { useState } from "react"
import {SalarioC} from '../../services/index.js'
 

export default function Salario() { 
    const[salarioBase, setSalarioBase] = useState(0)
    const[bonus, setBonus] = useState(0)
    const[desc, setDesc] = useState (0)
    const [result, setResult] = useState(0)

    function Total(){
        try {
            let final= SalarioC(salarioBase, bonus, desc)
            setResult ('O salário é de R$'+final) 

        }
        catch(err) {
            setResult(err.message)
        }
    }

    return(
        <mai>
            <div>
                <h1>Salário</h1>
            </div>

            <div>
                <label>Salario Base</label> <input type='number' value={salarioBase} onChange={e => setSalarioBase(Number(e.target.value))} />
            </div>

            <div>
                <label>Bonus mensal</label> <input type='number' value={bonus} onChange={e => setBonus(Number(e.target.value))} />
            </div>

            <div>
                <label>Desconto </label> <input type='number' value={desc} onChange={e => setDesc(Number(e.target.value))} />
            </div>

            <div>
                <button onClick={Total}> Calcular  </button>

                    <p> {result}</p> 
            </div>
        </mai>
    )
}