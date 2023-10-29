import { ContentContainer } from './styles'
import ReactMarkdown from 'react-markdown'

interface ContentTextProps {
  text: string
}

export function ContentText(props: ContentTextProps) {
  return (
    <ContentContainer>
      <ReactMarkdown>{props.text}</ReactMarkdown>
    </ContentContainer>
  )
}
