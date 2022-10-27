import * as Dialog from '@radix-ui/react-dialog'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.enum(['income', 'outcome']),
})

type SearchFormInputsProps = z.infer<typeof newTransactionFormSchema>

export function NewTransactionsModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputsProps>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  async function handleCreateNewTransaction(data: SearchFormInputsProps) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
  }
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>

        <CloseButton>
          <X size={24} color="#7C7C8A" />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Description"
            {...register('description')}
          />
          <input
            type="text"
            placeholder="Price"
            {...register('price', { valueAsNumber: true })}
          />
          <input type="text" placeholder="Category" {...register('category')} />

          <TransactionType>
            <TransactionTypeButton value="deposit" variant="deposit">
              <ArrowCircleUp size={24} />
              <span>Deposit</span>
            </TransactionTypeButton>
            <TransactionTypeButton value="withdraw" variant="withdraw">
              <ArrowCircleDown size={24} />
              <span>Withdraw</span>
            </TransactionTypeButton>
          </TransactionType>
          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
