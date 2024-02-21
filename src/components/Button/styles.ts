import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: ${cores.rosa};
  color: ${cores.salmao};
  font-size: 14px;
  padding: 4px 107px;
  font-weight: bold;
  border: none;

  :hover {
    cursor: pointer;
  }
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.rosa};
  color: ${cores.salmao};
  font-size: 14px;
  padding: 4px 6px;
  text-decoration: none;
  font-weight: bold;

  :hover {
    cursor: pointer;
  }
`
