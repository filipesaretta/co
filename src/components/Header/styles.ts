import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 13.25rem;
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`
export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const NewTransactionButton = styled.button`
  height: 50px;
  padding: 0.75rem 1.25rem;

  background: ${(props) => props.theme['green-500']};
  border-radius: 8px;
  color: ${(props) => props.theme.white};
  transition: background-color 0.3s;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['green-300']};
  }
`
