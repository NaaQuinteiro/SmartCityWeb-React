import { useState } from 'react'
import estilos from './Login.module.css'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const schemaLogin = z.object({

    username: z.string()
                .min(5, 'Mínimo de 5 caracteres')
                .max(100, "Máximo de 100 Ccaracteres"),

    password: z.string()
                .min(6, 'Mínimo de 6 caracteres')
                .max(10, "Máximo de 10 caracteres")
})

export function Login(){

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(schemaLogin)
    })

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
                    

                    {errors.username &&(
                        <p className={estilos.messageErro}>{errors.username.value}</p>
                    )}
                    <label htmlFor="" className={estilos.label}
                    >Username</label>
                    <input
                        {...register('username')}
                        className={estilos.input}
                        placeholder=''
                        value={username}
                        onChange={e => setUsername(e.target.value)}                
                    />

                    {errors.password &&(
                        <p className={estilos.messageErro}>{errors.password.value}</p>
                    )}
                    <label htmlFor="" className={estilos.label} 
                    >Password</label>
                    <input
                        {...register('password')}
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