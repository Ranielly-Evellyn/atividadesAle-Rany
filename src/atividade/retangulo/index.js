import { useState } from 'react'
import { contarRetangulo } from "../../services"



export default function LinhasRetangulo() {

    const [base, setBase] = useState()
    const [altura, setAltura] = useState()
    const [opcao,setOpcao]= useState('asterisco')
    const [resp, setResp] = useState([])

    function CalculoRetangulo() {
        try {
            let final = contarRetangulo(base, altura, opcao==='asterisco' ? '*' : '▆')
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

            <select onChange={e => setOpcao(e.target.value)}>
                <option value='imagem'>Imagem</option>
                <option value='quadrado'>Quadrado</option>
                <option value='asterisco'>Asteristico</option>
            </select>

            <button onClick={CalculoRetangulo} > Calcular </button>

            {resp.map(item =>{
                if(opcao === 'imagem') return <div><img src="../images/barbie.jpg" width={100}/></div>
            else return <p> {item}</p>  
            })}

        </main>

    )
}   