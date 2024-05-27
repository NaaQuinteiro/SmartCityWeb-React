import estilos from './Sensores.module.css'
import { Card } from './Card'

export function Sensores({propsSensor}){
    // aqui nós estamos passando o caminho da imagem dentro da api, é o link + a propse e o item dentro dela que contem o caminho da imagem
    const img = `https://image.tmdb.org/t/p/w400${propsSensor.poster_path}`
    return(
        <Card>
            <figure className={estilos.container}>
                <img src={img}/>
                <figcaption>{propsSensor.title}</figcaption>
                <p>{propsSensor.overview}</p>
                <p>Avaliaçaõ: {propsSensor.vote_average}</p>
            </figure>
        </Card>
        
    )
}