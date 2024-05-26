import { useState } from 'react'
import estilos from './Cadastro.module.css'

export function Cadastro(){

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    function obterDadosFormulario(){
        
    }


    return(
        <div className={estilos.body}>
            <div className={estilos.container}>
                <form action="" className={estilos.formulario}>
                    <h1 className={estilos.titulo}>Register</h1>

                    <label htmlFor=""className={estilos.label}>Name</label>
                    <input type="" 
                        className={estilos.input}
                        placeholder=''
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <label htmlFor=""className={estilos.label}>Email</label>
                    <input type="" 
                        className={estilos.input}
                        placeholder=''
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <label htmlFor=""className={estilos.label}>Username</label>
                    <input type="" 
                        className={estilos.input}
                        placeholder=''
                        value={username}
                        onChange={e => setUsername(e.target.value)}                    
                    />

                    <label htmlFor=""className={estilos.label}>Password</label>
                    <input type="" 
                        className={estilos.input}
                        placeholder=''
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className={estilos.botao}>
                        Sign in 
                    </button>

                    <a href="" className={estilos.link}>Back to login.</a>

                </form>
            </div> 
        </div>

    )
}

// tem que add um link para voltar por login e no login um para vir para essa tela 