import estilos from './ListaSensores.module.css'
import {Sensores} from '../componentes/Sensores'
import { useEffect } from 'react'
import { useState } from 'react'
 
export function ListaSensores(){
    
  // criando um state para armazenar as informações vindas dos dados no usefetch
  const [sensores, setSensores] = useState([])


  // constante para pegar a chave da nossa api do moviesDB
  const apiKey = "6dea489d401269c88f7a11cf1719871a"

  //executa uma função assícrona assim que o componente for reinderizado, acessando a api e pegar o seu retorno em json que será colocado num state chamado filmes
  // o useEffect pode ser vinculado a um conjunto de outros componentes
  // sempre que eu precisar que um afunção funcione quando o site é carregado usamos o useeffect
  // ele retorna o json da api com esse link, sendo possivel acessar os objetos e atributos desejados
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&language=pt-BR`)
    .then(resposta => resposta.json())
    .then(dados => setSensores(dados.results)) //armazena no useState os valores encontrados

  }, [])
  
  return(
        <main className={estilos.container}>
        
        {sensores.map( sensor => <Sensores propsSensor= {sensor}/>)}
        
      </main>
   
    )
}

// colocar {} no return permite inserir js e programação dentro dele 
// no nosso caso estamo usando o map para ele reinderizar o componente para todos os elementos do array que fui armazenado no state
//ele está falando que para cada filme dentro de filmes ele monta um componente filme, no caso ele monta 20 componentes 
//Porém, entretanto, todavia, ele ainda n preenche com os dados de cada filme apenas com essa parte.

// vale ressaltar que esse vetor filmes já possui as informações da api, portanto ele 
// será passado para o componete filme uma propse o umFilme da posição correspondente.