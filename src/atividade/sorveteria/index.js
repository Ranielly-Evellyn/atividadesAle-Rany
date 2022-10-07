import { useState } from "react"


export default function Sorveteria(){
    const [gramas, setGramas] = useState('');
    const [result, setResult] = useState('');

    function Peso(){
        let total = 0;

        if(gramas > 1000){
            total= (gramas / 100) * 3
        }
        
        else{
            total = (gramas / 100) * 3.50
        }

        setResult(total)
    }

 
    return (
        <main>
    
            <h1> Sorveteria</h1>
       
            <div>
                <div> Gramas: <input type='number' value={gramas} onChange = {e => setGramas (Number(e.target.value))} /></div>
            </div>
            <div>
            <button onClick={ Peso }> Calcular  </button>
              
              O peso é de R${result}        

            </div>
        </main>


    )
} 
