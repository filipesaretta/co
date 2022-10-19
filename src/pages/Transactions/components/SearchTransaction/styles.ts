import styled from 'styled-components'

export const SearchContainer = styled.form`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  input {
    flex: 1;
    background-color: ${(props) => props.theme['gray-900']};
    border-radius: 8px;
    color: ${(props) => props.theme['gray-300']};
    border: 1px solid ${(props) => props.theme['gray-900']};
    padding: 1rem;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border-radius: 8px;

    padding: 0.875rem 2rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['green-300']};
    font-weight: bold;
    transition: background-color 0.3s, color 0.3s;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['green-300']};
      color: ${(props) => props.theme.white};
    }
  }
`
