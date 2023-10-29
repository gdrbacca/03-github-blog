import {
  ContentHeaderContainer,
  ContentHeaderInfos,
  ContentHeaderLinks,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faComment,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

interface ContentHeaderProps {
  titulo: string
  nome: string
  data: string
  comments: string
  url: string
}

export function ContentHeader(props: ContentHeaderProps) {
  // console.log('titulo issue: ' + props.titulo)

  return (
    <ContentHeaderContainer>
      <ContentHeaderLinks>
        <a href="/">
          {' '}
          <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
        </a>
        <a href={props.url} target="_blank" rel="noreferrer">
          VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </ContentHeaderLinks>

      <h1>{props.titulo}</h1>

      <ContentHeaderInfos>
        <span>
          <FontAwesomeIcon icon={faGithub} />
          {props.nome}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendar} />
          {props.data}
        </span>

        <span>
          <FontAwesomeIcon icon={faComment} /> {props.comments} comentários
        </span>
      </ContentHeaderInfos>
    </ContentHeaderContainer>
  )
}
