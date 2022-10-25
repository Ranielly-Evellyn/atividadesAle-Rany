import {Link} from 'react-router-dom'



export default function Home() {
    return(
        <main>
            Home
            <div>
                <Link to= '/acai'> Açai</Link>
                <br></br>
                <Link to= '/signo'> Signo</Link>
                <br></br>
                <Link to= '/salario'> Salario</Link>
                <br></br>
                <Link to= '/paradas'> Paradas</Link>
                <br></br>
                <Link to= '/contar' > Contar</Link>
                <br></br>
                <Link to= '/linhas' > Linhas</Link>
                <br></br>
                <Link to= '/sorveteria'> Sorveteria</Link>
                <br></br>
                <Link to= '/temperatura'> Temperatura</Link>
                <br></br>
                <Link to= '/desenhoretangulo'> Retângulo</Link>
                <br></br>
                <Link to= '/juroscomposto'> Juros</Link>
                <br></br>
                <Link to= '/contaralunos'> Contar Alunos</Link>
                
                    
                
            </div>
            
        </main>
    )
}