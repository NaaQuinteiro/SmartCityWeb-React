import { useState } from 'react'
import estilos from './Login.module.css'
import { useNavigate } from 'react-router-dom'

export function Login(){

    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    function obterDadosFormulario(){
        
    }

    return(
        <div className={estilos.body}>
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
                        onChange={e => setUsername(e.target.value)}                
                    />

                    <label htmlFor="" className={estilos.label} 
                    >Password</label>
                    <input
                        className={estilos.input}
                        placeholder=''
                        value={password}
                        onChange={e => setPassword(e.target.value)}              
                    />

                    <button className={estilos.botao}>
                        Sign in
                    </button>

                    <a href="" className={estilos.link}>Register in here!</a>

                </form>

            </div>
        </div>
    )

}