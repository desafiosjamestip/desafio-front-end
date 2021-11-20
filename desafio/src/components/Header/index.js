import { Wrapper } from './styles'

import logo from '../../assets/styles/images/logo.svg'

export default function Header() {
  return (
    <Wrapper>
      <img src={logo} alt="James Tip logo" />
    </Wrapper>
  )
}
