import { MagnifyingGlass } from 'phosphor-react'
import { SearchContainer } from './styles'

export function SearchTransaction() {
  return (
    <SearchContainer>
      <input type="text" placeholder="Search for transactions" />
      <button>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchContainer>
  )
}
