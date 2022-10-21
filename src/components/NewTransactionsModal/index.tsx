import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'

export function NewTransactionsModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>

        <CloseButton>
          <X size={24} color="#7C7C8A" />
        </CloseButton>

        <form>
          <input type="text" placeholder="Description" />
          <input type="text" placeholder="Price" />
          <input type="text" placeholder="Category" />

          <TransactionType>
            <TransactionTypeButton value="deposit" variant="deposit">
              <ArrowCircleUp size={24} color="#00B37E" />
              <span>Deposit</span>
            </TransactionTypeButton>
            <TransactionTypeButton value="withdraw" variant="withdraw">
              <ArrowCircleDown size={24} color="#F75A68" />
              <span>Withdraw</span>
            </TransactionTypeButton>
          </TransactionType>
          <button type="submit">Register</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
