import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputsProps = z.infer<typeof searchFormSchema>

export function SearchTransaction() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputsProps>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputsProps) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(data)
  }
  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Search for transactions"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchContainer>
  )
}
