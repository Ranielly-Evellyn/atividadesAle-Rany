import { useState, useEffect } from "react"



export default function Signo(){

    const [mes, setMes] = useState ('');
    const [dia, setDia] = useState (0);
    const [result, setResult] = useState ('');

    function Libra(){
        if(mes == 'Setembro' && dia >= 23 || mes == 'Outubro' && dia <=22 )
            setResult('Seu signo é de Libra!')
        else{
            setResult('Seu signo não é de Libra!')
        }
    }

    useEffect (() => {
            Libra()
     }, [mes, dia])

    return(
        <main>
            <h1> Signo</h1>
            <div>
                <div>
                   Mês (em texto) <input type='text' value={mes} onChange = {e => setMes (e.target.value)}/>
                </div>
                <div>Dia <input type='number' value={dia} onChange = {e => setDia(Number( e.target.value))}
                /></div>
                <div>
                    {result}
                </div>
            </div>
        </main>
    )
}