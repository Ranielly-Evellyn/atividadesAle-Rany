
import './index.scss'
import { calcMaior, calcMedia, calcMenor, contarAlunos } from '../../services/index.js';
import { useState } from 'react'

export default function Conte() {

    const [fim, setFim] = useState(0)
    const [notasAlunos, setNotasAlunos] = useState([])

    const [resp, setResp] = useState([])
    const [media, setMedia] = useState(0);
    const [maior, setMaior] = useState(0);
    const [menor, setMenor] = useState(0);

    function calcularFim() {
        try {
            let final = contarAlunos(fim)
            setResp(final); console.log(final)

        } catch (err) {
            setResp(err.message)
        }


    }

    function alterar(pos, novoValor) {
        notasAlunos[pos] = Number(novoValor);
        setNotasAlunos([...notasAlunos]);
    }

    function calcular() {
        const a = calcMedia(notasAlunos);
        const b = calcMaior(notasAlunos);
        const c = calcMenor(notasAlunos);

        setMedia(a);
        setMaior(b);
        setMenor(c);
    }



    return (
        <main>
            <h1>Contar Itens</h1>

            Quantidade de alunos: <input type='number' value={fim} onChange={e => setFim(Number(e.target.value))} />


            <button onClick={calcularFim} > Calcular </button>
            <button onClick={calcular} > Calcular </button>
            {resp.map(item => {
                notasAlunos.map((item, pos) =>
                    <div>
                        Aluno {pos + 1}: <input type='text' value={notasAlunos[pos]} onChange={e => alterar(pos, e.target.value)} />
                    </div>
                )
            })
            }


            <div>
                Média: {media}
            </div>
            <div>
                Maior: {maior}
            </div>
            <div>
                Menor: {menor}
            </div>

        </main>
    )

}