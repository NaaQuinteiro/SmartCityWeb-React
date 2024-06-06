import estilos from './Lateral.module.css'
import { Link } from 'react-router-dom' 
import { Broadcast, Users, FediverseLogo, MapTrifold, Funnel } from '@phosphor-icons/react'
export function Lateral(){
    return(
        <aside className={estilos.container}>

        <header>
            <img className={estilos.imagemCabecalho}
            src="https://img.freepik.com/fotos-gratis/vistas-panoramicas-da-cidade-de-dubai-iluminadas-em-um-espectro-de-neon_23-2151305392.jpg?t=st=1716232260~exp=1716235860~hmac=635b2494571240bce7fdb3cc6e1b263a6e3a092fb4786114a45f56655f70c7b3&w=996"
            alt="imagem ilustrativa de cidade inteligente"
            />

        <div className={estilos.perfil}>
            <img className={estilos.avatar} 
                src="https://img.freepik.com/vetores-gratis/ilustracao-do-icone-do-vetor-dos-desenhos-animados-de-danca-bonito-astronauta-conceito-de-icone-de-ciencia-de-tecnologia-isolado-vetor-premium-estilo-flat-cartoon_138676-3851.jpg?t=st=1716232055~exp=1716235655~hmac=ae153837d8656f03b3117751e0740edb2b795ba4a7956a47e60e39d6a12e9bf1&w=826"
                 alt="imagem avatar" 
            />

            <p>Nome do Usuário</p>
        </div>
        </header>

        <section>

                <Link 
                    className={estilos.botao}
                    to='/inicial'
                >
                    Sensores
                    <FediverseLogo size={20} />
                </Link>

                <Link 
                    className={estilos.botao}
                    to='cadastroSensores'
                >
                   Adicionar
                   <Broadcast size={20} />
                </Link>

                <Link
                    className={estilos.botao}
                    to='cadastroUsers'

                >
                    Cadastre <Users size={22} />
                </Link>

                <Link
                    className={estilos.botao}
                    to='localizacao'

                >
                    Mapa <MapTrifold size={22} />
                </Link>

                <Link
                    className={estilos.botao}
                    to='filtro'

                >
                    Filtro <Funnel  size={22} />
                </Link>


            </section>

        </aside>
    )
}
