import {Routes, Route} from 'react-router-dom'
import { Login } from '../paginas/Login'
import { Inicial } from '../paginas/Inicial'
import { ListaSensores } from '../paginas/ListaSensores'
import { CadastroSensores } from '../paginas/CadastroSensores'
import { Cadastro } from '../paginas/Cadastro'

export function Rotas(){
    return(
        <Routes>

            <Route path='/' element={<Login/>}/>

            <Route path='/inicial' element={<Inicial/>}>
                <Route index element={<ListaSensores/>}/>
                <Route path='cadastroSensores' element={<CadastroSensores/>}/>
                <Route path='cadastroUsers' element={<Cadastro/>}/>

            </Route>
            
            

        </Routes>
    )
}