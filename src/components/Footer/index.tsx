import logo from '../../assets/images/logo.svg'
import redesSociais from '../../assets/images/redes sociais.png'
import { Container, Direitos, Logo, Social } from './styles'

const Footer = () => (
  <Container>
    <div className="container">
      <Logo>
        <img src={logo} alt="Efood" />
      </Logo>
      <Social>
        <img src={redesSociais} alt="Redes Sociais" />
      </Social>
      <Direitos>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </Direitos>
    </div>
  </Container>
)

export default Footer
