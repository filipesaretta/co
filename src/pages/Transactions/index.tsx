import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import {
  PriceHighLight,
  TransactionContainer,
  TransactionTable,
} from './styles'

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />

      <TransactionContainer>
        <TransactionTable>
          <tr>
            <td>Pizza</td>
            <td>
              <PriceHighLight variant="outcome">- R$ 1500,00</PriceHighLight>{' '}
            </td>
            <td>Alimentação</td>
            <td>11/04/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>
              <PriceHighLight variant="income">R$ 12.00000</PriceHighLight>{' '}
            </td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
        </TransactionTable>
      </TransactionContainer>
    </>
  )
}
