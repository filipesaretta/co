import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay } from './styles'

export function NewTransactionsModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>

        <Dialog.Close />
      </Content>
    </Dialog.Portal>
  )
}
