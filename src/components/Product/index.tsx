import estrela from '../../assets/images/estrela.svg'
import { ButtonLink } from '../Button/styles'
import Tag from '../Tag'
import {
  Capa,
  Card,
  Conteudo,
  Descricao,
  Header,
  Infos,
  Nota,
  Titulo
} from './styles'

type Props = {
  title: string
  description: string
  infos: string
  image: string
  score: number
}

export const Product = ({ title, description, infos, image, score }: Props) => (
  <Card>
    <Capa src={image} alt={title} />
    <Infos>
      <Tag key={infos}>{infos}</Tag>
    </Infos>
    <Conteudo>
      <Header>
        <Titulo>{title}</Titulo>
        <Nota>
          <p>{score}</p>
          <img src={estrela} alt="" />
        </Nota>
      </Header>
      <Descricao>{description}</Descricao>
      <ButtonLink to={'/Perfil'}>Saiba mais</ButtonLink>
    </Conteudo>
  </Card>
)
