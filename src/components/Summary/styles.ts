import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

interface BackgroundProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<BackgroundProps>`
  background-color: ${(props) => props.theme['gray-600']};
  padding: 2rem;
  border-radius: 8px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    font-weight: bold;
    font-size: 2rem;
    margin-top: 1rem;
  }

  margin-top: -5rem;

  ${(props) =>
    props.variant === 'green' &&
    css`
      background-color: ${props.theme['green-500']};
    `}
`
