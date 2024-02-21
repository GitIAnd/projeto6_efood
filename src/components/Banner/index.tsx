import {
  Imagem,
  ImagemPerfil,
  Titulo,
  BannerMacarrao,
  ContainerPerfil
} from './styles'

import bannerImg from '../../assets/images/banner.png'
import bannerImgPerfil from '../../assets/images/fundoMacarrao.png'
import logo from '../../assets/images/logo.svg'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <img src={logo} alt="EFOOD" />
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </div>
  </Imagem>
)

export const BannerPerfil = () => (
  <>
    <ImagemPerfil style={{ backgroundImage: `url(${bannerImg})` }}>
      <ContainerPerfil className="container">
        <a href="/">Restaurantes</a>
        <img src={logo} alt="EFOOD" />
        <p>0 produto(s) no carrinho</p>
      </ContainerPerfil>
    </ImagemPerfil>
    <BannerMacarrao style={{ backgroundImage: `url(${bannerImgPerfil})` }}>
      <div className="container">
        <h1>Italiana</h1>
        <h2>La Dolce Vita Trattoria</h2>
      </div>
    </BannerMacarrao>
  </>
)

export default Banner
