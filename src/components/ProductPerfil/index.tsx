import { ButtonContainer, ButtonLink } from '../Button/styles'
import {
  BotaoClose,
  Button,
  Card,
  Conteudo,
  Descricao,
  DescricaoModal,
  ModalContainer,
  ModalContent,
  Titulo,
  TituloModal
} from './styles'
import { Food } from '../../pages/Home'

import pizzaModal from '../../assets/images/pizzaModal.png'
import close from '../../assets/images/close.png'
import { useState } from 'react'

type Props = {
  title: string
  description: string
  image: string
}

const ProductPerfil = ({ title, description, image }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [food, setFood] = useState<Food[]>([])
  return (
    <>
      <section>
        <Card>
          <img src={image} alt={title} />
          <Titulo>{title}</Titulo>
          <Descricao>{description}</Descricao>
          <Button>
            <ButtonContainer onClick={() => setModalEstaAberto(true)}>
              Mais Detalhes
            </ButtonContainer>
          </Button>
        </Card>
      </section>
      <ModalContainer className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <img src={pizzaModal} />
          <Conteudo>
            <TituloModal>Pizza Marguerita</TituloModal>
            <DescricaoModal>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
              <br />
              <br />
              Serve: de 2 a 3 pessoas
            </DescricaoModal>
            <ButtonLink to={'/'}>Adicionar ao carrinho - R$ 60,90</ButtonLink>
          </Conteudo>
          <BotaoClose src={close} onClick={() => setModalEstaAberto(false)} />
        </ModalContent>
        <div className="overlay"></div>
      </ModalContainer>
    </>
  )
}

export default ProductPerfil
