import { useState } from 'react'
import estilos from './Login.module.css'
import { useNavigate } from 'react-router-dom'

export function Login(){

    const[username, SetUsername] = useState('')
    const[password, SetPassword] = useState('')

    function obterDadosFormulario(){
        
    }

    return(
        <div className={estilos.container}>

            <form action=""
                className={estilos.formulario}
            >
                <h1 className={estilos.titulo}>Login</h1>
                
                <label htmlFor="" className={estilos.label}
                >Username</label>
                <input
                    className={estilos.input}
                    placeholder=''
                    value={username}
                    onChange={e => SetUsername(e.target.value)}                
                />

                <label htmlFor="" className={estilos.label} 
                >Password</label>
                <input
                    className={estilos.input}
                    placeholder=''
                    value={password}
                    onChange={e => SetPassword(e.target.value)}              
                />

                <button className={estilos.botao}>
                    Login
                </button>

            </form>

        </div>
    )

}