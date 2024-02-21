import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.salmao};
  color: ${cores.rosa};
  margin-bottom: 48px;
  position: relative;
  padding: 8px;

  ${ButtonContainer} {
    background-color: ${cores.rosa};
    color: ${cores.salmao};
    cursor: pointer;
  }
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-bottom: 8px;
`
export const Button = styled.div`
  padding-bottom: 4px;
`
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${cores.branca};
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  max-width: 1024px;
  background-color: ${cores.salmao};
  padding: 32px;
  display: flex;
  position: relative;
  z-index: 1;
`

export const Conteudo = styled.div`
  padding-left: 24px;
`

export const TituloModal = styled.h2`
  margin-bottom: 16px;
`

export const DescricaoModal = styled.p`
  margin-bottom: 16px;
`

export const BotaoClose = styled.img`
  height: 16px;
  cursor: pointer;
`
