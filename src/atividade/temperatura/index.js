import { useState } from "react"
import { Febre } from '../../services/index.js'



export default function Temperatura (){
    
    const [temperatura, setTemperatura] = useState (0);
    const [result, setResult] = useState(0);


    function Grau () {
        try {
            let final= Febre (temperatura)
            setResult (final)
        
        } catch (err) {
            setResult (err.message)
        } 
    }




    return (
        <main>
            <div>
                <h1>Temperatura</h1>
            </div>

            <div>
                <label>Informe a sua temperatura</label> <input type='number' value={temperatura} onChange={e => setTemperatura(Number(e.target.value))} />
            </div>

            <div>
                <button onClick={Grau}> Verificar  </button>

                    <p> {result}</p> 
            </div>

        </main>

    )

}

