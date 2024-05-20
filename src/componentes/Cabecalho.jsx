import estilos from './Cabecalho.module.css'
import { MapTrifold, WifiHigh } from '@phosphor-icons/react'

export function Cabecalho(){
    return(
        <header className={estilos.container}>
            <MapTrifold 
                weight='duotone'
                size={30}
                color='#ffff'
            />
            <p className={estilos.container}>Smart City</p>
            <WifiHigh
                eight='duotone'
                size={30}
                color='#fff'
            />
        </header>
    )
}