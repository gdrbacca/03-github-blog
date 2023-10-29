import { formatDistanceToNow } from 'date-fns'
import { CardContainer } from './styles'
import ptBr from 'date-fns/locale/pt-BR'
import { NavLink } from 'react-router-dom'

interface PropsCard {
  titulo: string
  texto: string
  data: string
  numero: string
}

export function Card(props: PropsCard) {
  console.log('Data card: ' + new Date(props.data))
  const publishedDateRelative = formatDistanceToNow(new Date(props.data), {
    locale: ptBr,
    addSuffix: true,
  })

  console.log(props.numero)
  return (
    <NavLink to={'/content/' + props.numero}>
      <CardContainer>
        <div>
          <h1>{props.titulo}</h1>
          <span>{publishedDateRelative}</span>
        </div>

        <p>{props.texto}</p>
      </CardContainer>
    </NavLink>
  )
}
