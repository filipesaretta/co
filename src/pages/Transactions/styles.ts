import styled from 'styled-components'

export const TransactionContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1.5rem;
`
export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 1.25rem 2rem;
    color: ${(props) => props.theme['gray-300']};

    :first-child {
      width: 50%;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    :last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
`
interface PriceHighLightProps {
  variant?: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) =>
    props.variant === 'income' ? props.theme['green-500'] : '#F75A68'};
`
