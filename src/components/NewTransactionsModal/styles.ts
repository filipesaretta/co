/* eslint-disable prettier/prettier */
import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  border-radius: 8px;
  padding: 3rem;

  background-color: ${(props) => props.theme['gray-800']};

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    input {
      background-color: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
      border: 1px solid ${(props) => props.theme['gray-900']};
      padding: 1rem;
      border-radius: 8px;
    }

    button[type='submit'] {
      height: 3.625rem;
      padding: 0.75rem 1.25rem;

      background: ${(props) => props.theme['green-500']};
      border-radius: 8px;
      color: ${(props) => props.theme.white};
      transition: background-color 0.3s;
      border: none;

      cursor: pointer;

      &:disabled {
        opacity: .5;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme['green-700']};
      }
    }
  }
`
export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  border: 0;
  background-color: transparent;
  right: 1.5rem;
  top: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

interface Props {
  variant: 'deposit' | 'withdraw'
}

export const TransactionTypeButton = styled(RadioGroup.Item) <Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: 3.625rem;

  background-color: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-300']};
  border-radius: 8px;
  border: 0;

  svg {
    color: ${(props) =>
    props.variant === 'deposit' ? props.theme['green-700'] : '#F75A68'};
  }

  &[data-state='checked'] {
    svg {
      color: white;
    }
    color: white;
    background-color: ${(props) =>
    props.variant === 'deposit' ? props.theme['green-700'] : '#F75A68'};
  }
`
