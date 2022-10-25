import { useContext } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { SearchTransaction } from './components/SearchTransaction'
import {
  PriceHighLight,
  TransactionContainer,
  TransactionTable,
} from './styles'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)
  return (
    <>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchTransaction />
        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </>
  )
}
