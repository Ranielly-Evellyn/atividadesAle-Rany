import {Routes, Route, BrowserRouter} from 'react-router-dom'


import Acai from '../src/atividade/acai/index.js'
import Signo from '../src/atividade/signo/index.js'
import Sorveteria from './atividade/sorveteria/index.js'
import Salario from './atividade/salario/index.js'
import Paradas from './atividade/paradas/index.js'
import Temperatura from './atividade/temperatura/index.js'
import Home from './atividade/home/index.js'
import Orcamento from './atividade/orcamento/index.js'
import Cinema from './atividade/cinema/index.js'
import Contar from './atividade/contar/index.js'
import Linhas from './atividade/linhas/index.js'
import Retangulo from './atividade/retangulo/index.js'
import Cafe from './atividade/cafe'
import Juros from './atividade/juroscomposto/index.js'
import ContarAluno  from './atividade/contarAluno/index.js'


export default function  Index (){

    return (
        <BrowserRouter>
        <Routes>
            <Route path= '/acai' element= {<Acai/>} />
            <Route path= '/signo' element= {<Signo/>} />
            <Route path= '/sorveteria' element= {<Sorveteria/>} />
            <Route path= '/salario' element= {<Salario/>} />
            <Route path= '/paradas' element= {<Paradas/>} />
            <Route path= '/temperatura' element= {<Temperatura/>} />
            <Route path= '/home' element= {<Home/>} />
            <Route path= '/orcamento' element= {<Orcamento/>} />
            <Route path= '/cinema' element= {<Cinema/>} />
            <Route path= '/contar' element= {<Contar/>} />
            <Route path= '/linhas' element= {<Linhas/>} />
            <Route path= '/desenhoretangulo' element= {<Retangulo/>} />
            <Route path= '/cafe' element= {<Cafe/>} />
            <Route path= '/juroscomposto' element= {<Juros/>} />
            <Route path= '/contaralunos' element= {<ContarAluno/>} />

        </Routes>
        </BrowserRouter>
    )

}







