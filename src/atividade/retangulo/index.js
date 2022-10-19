import { useState } from 'react'
import { contarRetangulo } from "../../services"



export default function LinhasRetangulo() {

    const [base, setBase] = useState()
    const [altura, setAltura] = useState()
    const [resp, setResp] = useState([])

    function CalculoRetangulo() {
        try {
            let final = contarRetangulo(base, altura)
            setResp(final)

        } catch (err) {
            setResp(err.message)
        }


    }

    return (
        <main>
            <h1>Desenho Retângulo</h1>

            Linhas: <input type='number' value={base} onChange={e => setBase(Number(e.target.value))} />
            Coluna: <input type='number' value={altura} onChange={e => setAltura(Number(e.target.value))} />

            <button onClick={CalculoRetangulo} > Calcular </button>

            {resp.map(item =>
                <div>
                    {item}
                </div>
            )}

        </main>

    )
}   