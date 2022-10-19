import { useState } from 'react'
import { cafe } from '../../services';
import './index.scss'


export default function Cafe(){
    const [alunos, setAlunos] = useState();
    const [capac, setCapac] = useState();
    const [mili, setMili] = useState();
    const [resp, setResp] = useState();


    function Calcular(){
        let resposta = cafe(alunos, capac, mili);
        setResp(resposta);

    }



    return(
        <main>
            <div>
                <h1>Café</h1>
            </div>

            <div>
                <label>Alunos</label> <input type='number' value={alunos} onChange={e => setAlunos(Number(e.target.value))} />
            </div>

            <div>
                <label>Capacidade</label> <input type='number' value={capac} onChange={e => setCapac(Number(e.target.value))} />
            </div>

            <div>
                <label>Mililitros</label> <input type='number' value={mili} onChange={e => setMili(Number(e.target.value))} />
            </div>

            

            <div>
                <button onClick={Calcular}> Calcular  </button>

                    <p> {resp}</p> 
            </div>
        </main>
    )
}