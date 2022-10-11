import { useState } from "react";
import { Febre } from '../../services/index.js'



export default function temeperatura (){
    
    const [temeperatura, setTemperatura] = useState (0)
    const [result, setResult] = useState(0)


    function () {
        try {
            let resultado = Febre (temeperatura)
            setResult ( resultado)
        
        } catch (err) {
            setResult (err.message)
        } 
    }




    return (
        <main>
            <div>
                <h1>Paradas</h1>
            </div>

            <div>
                <label>Capacidade</label> <input type='number' value={capacidade} onChange={e => setCapacidade(Number(e.target.value))} />
            </div>

            <div>
                <label>Consumo</label> <input type='number' value={consumo} onChange={e => setConsumo(Number(e.target.value))} />
            </div>

            <div>
                <label>Distância</label> <input type='number' value={dist} onChange={e => setDist(Number(e.target.value))} />
            </div>

            <div>
                <button onClick={Par}> Calcular  </button>

                    <p> {result}</p> 
            </div>

        </main>

    )

}

