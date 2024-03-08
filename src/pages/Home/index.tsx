import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useEffect, useState } from 'react'

// const listHome: Food[] = [
//   {
//     id: 1,
//     title: 'Hioki Sushi',
//     score: '4.9',
//     description:
//       'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
//     image: sushi,
//     infos: ['Destaque da semana', 'Japonesa']
//   },
//   {
//     id: 2,
//     title: 'La Dolce Vita Trattoria',
//     score: '4.6',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     image: macarrao,
//     infos: ['Italiana']
//   },
//   {
//     id: 3,
//     title: 'La Dolce Vita Trattoria',
//     score: '4.6',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     image: macarrao,
//     infos: ['Italiana']
//   },
//   {
//     id: 4,
//     title: 'La Dolce Vita Trattoria',
//     score: '4.6',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     image: macarrao,
//     infos: ['Italiana']
//   },
//   {
//     id: 5,
//     title: 'La Dolce Vita Trattoria',
//     score: '4.6',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     image: macarrao,
//     infos: ['Italiana']
//   },
//   {
//     id: 6,
//     title: 'La Dolce Vita Trattoria',
//     score: '4.6',
//     description:
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//     image: macarrao,
//     infos: ['Italiana']
//   }
// ]

export type Food = {
  map(arg0: (food: any) => JSX.Element): import('react').ReactNode
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [listHome, setListHome] = useState<Food[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(
      (res) => res.json().then((res) => setListHome(res))
    )
  })

  return (
    <>
      <Banner />
      <ProductsList foods={listHome} />
    </>
  )
}

export default Home
