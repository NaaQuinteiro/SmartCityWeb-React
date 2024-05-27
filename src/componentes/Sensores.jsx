import estilos from './Sensores.module.css'
import { Card } from './Card'

export function Sensores({propsSensor}){
    return(
        <Card>
            <figure className={estilos.container}>
                <figcaption>{propsSensor.id}</figcaption>
                <p>Tipo de Sensor: {propsSensor.tipo}</p>
                <p>Localização: {propsSensor.localizacao}</p>
                <p>Latitude: {propsSensor.latitude}</p>
                <p>Longitude: {propsSensor.longitude}</p>
                <p>Responsável: {propsSensor.responsavel}</p>
                <button>Alterar</button>
            </figure>
        </Card>
        
    )
}