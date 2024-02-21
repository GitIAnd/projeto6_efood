import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  margin-bottom: 48px;
  border: 1px solid ${cores.salmao};
  position: relative;
`

export const Capa = styled.img`
  display: block;
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const Conteudo = styled.div`
  padding: 8px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  display: block;
`

export const Nota = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;

  p {
    padding-right: 8px;
  }
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-bottom: 16px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
