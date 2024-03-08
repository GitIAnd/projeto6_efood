import { useState } from 'react'
import { Food } from '../../pages/Home'
import { Product } from '../Product'
import ProductPerfil from '../ProductPerfil'
import { Container, List, ListPerfil } from './styles'

export type Props = {
  foods: Food[]
}

const ProductsList = ({ foods }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {foods.map((food: Food) => (
            <Product
              key={food.id}
              id={food.id}
              title={food.titulo}
              score={food.avaliacao}
              description={food.descricao}
              image={food.capa}
              infos={food.tipo}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export const ProductsListPerfil = ({ foods }: Props) => {
  return (
    <Container>
      <div className="container">
        <ListPerfil>
          {foods.map((food) => (
            <li key={food.id}>
              <ProductPerfil
                title={food.titulo}
                description={food.descricao}
                image={food.capa}
              />
            </li>
          ))}
        </ListPerfil>
      </div>
    </Container>
  )
}

export default ProductsList
