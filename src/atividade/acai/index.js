import { useState } from "react"
import { CalcularAcai } from '../../services/index.js'

export default function Acai() {
    const [qtdPeq, setQtdPeq] = useState(0)
    const [qtdMed, setQtdMed] = useState(0)
    const [qtdGra, setQtdGra] = useState(0)
    const [desc, setDesc] = useState(0)
    const [result, setResult] = useState(0)


    function Calcular() {
        try {
          let final = CalcularAcai(qtdPeq, qtdMed, qtdGra, desc)
          setResult('O total a pagar é R$'+final.toFixed([2]))
        }
        catch(err) {
            setResult(err.message)
        }

    }



    return (
        <main>
            <div>
                <h1>Açai</h1>
            </div>

            <div>
                <label>Quantidade Pequeno</label> <input type='number' value={qtdPeq} onChange={e => setQtdPeq(Number(e.target.value))} />
            </div>

            <div>
                <label>Quantidade Médio</label> <input type='number' value={qtdMed} onChange={e => setQtdMed(Number(e.target.value))} />
            </div>

            <div>
                <label>Quantidade Grande</label> <input type='number' value={qtdGra} onChange={e => setQtdGra(Number(e.target.value))} />
            </div>

            <div>
                <label>Desconto </label> <input type='number' value={desc} onChange={e => setDesc(Number(e.target.value))} />
            </div>

            <div>
                <button onClick={Calcular}> Calcular  </button>

                    <p> {result}</p> 
            </div>

        </main>

    )
}



