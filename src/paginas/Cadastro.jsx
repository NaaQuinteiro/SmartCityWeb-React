import { useState } from 'react'
import estilos from './Cadastro.module.css'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';


const schemaCadastro = z.object({

    email: z.string()
                .min(5, 'Por favor, insira pelo menos 5 caracteres')
                .max(100, "Por favor, insira até 100 caracteres"),

    username: z.string()
                .min(5, 'Por favor, insira pelo menos 5 caracteres')
                .max(100, "Por favor, insira até 100 caracteres"),

    password: z.string()
                .min(6, 'Por favor, insira pelo menos 6 caracteres')
                .max(10, "Por favor, insira até 100 caracteres")
});

export function Cadastro(){

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(schemaCadastro)
    })

    const[email, setEmail] = useState('')
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    function obterDadosFormulario(data){
        console.log(data);        
    }


    return(
        <div className={estilos.body}>
            <div className={estilos.container}>
                <form action="" 
                    className={estilos.formulario}
                    onSubmit={handleSubmit(obterDadosFormulario)}
                >
                    <h1 className={estilos.titulo}>Register</h1>

                    <label className={estilos.label}>
                        Email
                    </label>
                    <input 
                        {...register('email')}
                        className={estilos.input}
                        placeholder=''
                        value={email}
                        onChange={e=> setEmail(e.target.value)}           
                    />
                    {errors.email && (
                        <p className={estilos.messageErro}>{errors.email.message}</p>
                    )}

                    
                    <label className={estilos.label}>
                        Username
                    </label>
                    <input
                        {...register('username')}
                        className={estilos.input}
                        placeholder='' 
                        value={username}
                        onChange={e => setUsername(e.target.value)}               
                    />
                    {errors.username && (
                        <p className={estilos.messageErro}>{errors.username.message}</p>
                    )}

                    
                    <label className={estilos.label}>
                        Password
                    </label>
                    <input  
                        {...register('password')}
                        className={estilos.input}
                        placeholder=''
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    {errors.password && (
                        <p className={estilos.messageErro}>{errors.password.message}</p>
                    )}

                    <button className={estilos.botao} type="submit">
                        Sign in 
                    </button>

                    <a href="" className={estilos.link}>Back to login.</a>

                </form>
            </div> 
        </div>

    )
}

// tem que add um link para voltar por login e no login um para vir para essa tela 