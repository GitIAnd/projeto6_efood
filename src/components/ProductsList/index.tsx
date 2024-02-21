import { Food } from '../../pages/Home'
import { Product } from '../Product'
import ProductPerfil from '../ProductPerfil'
import { Container, List, ListPerfil } from './styles'

export type Props = {
  foods: Food[]
}

const ProductsList = ({ foods }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((food) => (
          <Product
            key={food.id}
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

export const ProductsListPerfil = ({ foods }: Props) => (
  <Container>
    <div className="container">
      <ListPerfil>
        {foods.map((food) => (
          <ProductPerfil
            key={food.id}
            title={food.titulo}
            description={food.descricao}
            image={food.capa}
          />
        ))}
      </ListPerfil>
    </div>
  </Container>
)

export default ProductsList
