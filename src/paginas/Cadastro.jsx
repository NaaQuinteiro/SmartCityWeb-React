import estilos from './Cadastro.module.css'

export function Cadastro(){


    return(
        <div className={estilos.body}>
            <div className={estilos.container}>
                <form action="" className={estilos.formulario}>
                    <h1 className={estilos.titulo}>Register</h1>

                    <label htmlFor=""className={estilos.label}>Name</label>
                    <input type="" className={estilos.input}/>

                    <label htmlFor=""className={estilos.label}>Email</label>
                    <input type="" className={estilos.input}/>

                    <label htmlFor=""className={estilos.label}>Username</label>
                    <input type="" className={estilos.input}/>

                    <label htmlFor=""className={estilos.label}>Password</label>
                    <input type="" className={estilos.input}/>

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