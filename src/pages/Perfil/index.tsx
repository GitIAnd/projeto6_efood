import { useParams } from 'react-router-dom'
import { BannerPerfil } from '../../components/Banner'
import { ProductsListPerfil } from '../../components/ProductsList'

import { Food } from '../Home'
import { useEffect, useState } from 'react'

// const listHome: Food[] = [
//   {
//     id: 1,
//     titulo: 'Pizza Marguerita',
//     avaliacao: 4.9,
//     descricao:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     capa: pizza,
//     tipo: 'Japonesa',
//     destacado: false
//   },
//   {
//     id: 2,
//     titulo: 'Pizza Marguerita',
//     avaliacao: 4.9,
//     descricao:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     capa: pizza,
//     tipo: 'Japonesa',
//     destacado: false
//   },
//   {
//     id: 3,
//     titulo: 'Pizza Marguerita',
//     avaliacao: 4.9,
//     descricao:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     capa: pizza,
//     tipo: 'Japonesa',
//     destacado: false
//   },
//   {
//     id: 4,
//     titulo: 'Pizza Marguerita',
//     avaliacao: 4.9,
//     descricao:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     capa: pizza,
//     tipo: 'Japonesa',
//     destacado: false
//   },
//   {
//     id: 5,
//     titulo: 'Pizza Marguerita',
//     avaliacao: 4.9,
//     descricao:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     capa: pizza,
//     tipo: 'Japonesa',
//     destacado: false
//   },
//   {
//     id: 6,
//     titulo: 'Pizza Marguerita',
//     avaliacao: 4.9,
//     descricao:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     capa: pizza,
//     tipo: 'Japonesa',
//     destacado: false
//   }
// ]

const Perfil = () => {
  const { id } = useParams()

  const [bellaTavola, setBellaTavola] = useState<Food[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/1`).then(
      (res) => res.json().then((res) => setBellaTavola(res))
    )
  }, [])

  return (
    <>
      <BannerPerfil />
      <ProductsListPerfil foods={bellaTavola} />
    </>
  )
}

export default Perfil
