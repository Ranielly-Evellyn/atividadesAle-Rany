import { useState } from 'react';
import { totalCompra } from '../../services';
import './index.scss'




export default function Cinema(){
    const[inteira, setInteira] = useState(0);
    const[meias, setMeias] = useState(0);
    const[diaSemana,setDiaSemana] = useState('');
    const[nacional,setNacional] = useState(false);
    const[resp, setResp] = useState();


    function calcular(){
        try{
        let final = totalCompra(inteira,meias, diaSemana, nacional)

        setResp('O total a se pagar pelos ingressos é R$' + final);
        } catch(err){
            setResp(err.message);
        }
    }

    return (
    <main className='page-cinema'>
        <h1>Cinema</h1>

        Inteiras: <input type='Number' value={inteira} onChange={e => setInteira(Number(e.target.value))} />

        
        Meias: <input type='Number'  value={meias} onChange={e => setMeias(Number(e.target.value))}/>

        
        Dia da Semana: <input type='text' value={diaSemana} onChange={e => setDiaSemana(e.target.value)}  />

        
        Nacional: <input type='checkbox' value={nacional} onChange={e => setNacional(e.target.checked)} />
    
        <button onClick={calcular}>Calcular</button>
        {resp}
    </main>
    );
}