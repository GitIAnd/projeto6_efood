import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 40px;
  text-align: center;
`
export const Titulo = styled.h1`
  font-size: 36px;
  font-weight: bold;
  max-width: 539px;
  margin: 140px auto;
`
export const ImagemPerfil = styled.div`
  width: 100%;
  height: 186px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 40px;
  text-align: center;
`

export const ContainerPerfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    color: ${cores.salmao};
  }

  p {
    font-size: 18px;
    font-weight: bold;
  }
`

export const BannerMacarrao = styled.div`
  width: 100%;
  height: 286px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${cores.branca};
  padding-top: 24px;

  h1 {
    font-weight: 100;
    font-size: 32px;
    margin-bottom: 157px;
    line-height: 37px;
  }

  h2 {
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
  }
`
