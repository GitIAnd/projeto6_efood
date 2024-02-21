import { BannerPerfil } from '../../components/Banner'
import { ProductsListPerfil } from '../../components/ProductsList'

import pizza from '../../assets/images/pizza.png'
import { Food } from '../Home'

const listHome: Food[] = [
  {
    id: 1,
    titulo: 'Pizza Marguerita',
    avaliacao: 4.9,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    capa: pizza,
    tipo: 'Japonesa',
    destacado: false
  },
  {
    id: 2,
    titulo: 'Pizza Marguerita',
    avaliacao: 4.9,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    capa: pizza,
    tipo: 'Japonesa',
    destacado: false
  },
  {
    id: 3,
    titulo: 'Pizza Marguerita',
    avaliacao: 4.9,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    capa: pizza,
    tipo: 'Japonesa',
    destacado: false
  },
  {
    id: 4,
    titulo: 'Pizza Marguerita',
    avaliacao: 4.9,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    capa: pizza,
    tipo: 'Japonesa',
    destacado: false
  },
  {
    id: 5,
    titulo: 'Pizza Marguerita',
    avaliacao: 4.9,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    capa: pizza,
    tipo: 'Japonesa',
    destacado: false
  },
  {
    id: 6,
    titulo: 'Pizza Marguerita',
    avaliacao: 4.9,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    capa: pizza,
    tipo: 'Japonesa',
    destacado: false
  }
]

const Perfil = () => {
  return (
    <>
      <BannerPerfil />
      <ProductsListPerfil foods={listHome} />
    </>
  )
}

export default Perfil
