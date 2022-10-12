import {Routes, Route, BrowserRouter} from 'react-router-dom'


import Acai from '../src/atividade/acai/index.js'
import Signo from '../src/atividade/signo/index.js'
import Sorveteria from './atividade/sorveteria/index.js'
import Salario from './atividade/salario/index.js'
import Paradas from './atividade/paradas/index.js'
import Temperatura from './atividade/temperatura/index.js'
import Home from './atividade/home/index.js'


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
        </Routes>
        </BrowserRouter>
    )

}







