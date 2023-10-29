import imgHeader from '../../assets/Cover.png'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={imgHeader} alt="" />
    </HeaderContainer>
  )
}
