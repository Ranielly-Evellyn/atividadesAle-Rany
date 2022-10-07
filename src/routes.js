import {Routes, Route, BrowserRouter} from 'react-router-dom'


import Acai from '../src/atividade/acai/index.js'
import Signo from '../src/atividade/signo/index.js'
import Sorveteria from './atividade/sorveteria/index.js'



export default function  Index (){

    return (
        <BrowserRouter>
        <Routes>
            <Route path= '/acai' element= {<Acai/>} />
            <Route path= '/signo' element= {<Signo/>} />
            <Route path= '/sorveteria' element= {<Sorveteria/>} />
        </Routes>
        </BrowserRouter>
    )

}







