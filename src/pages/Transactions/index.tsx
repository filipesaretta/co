import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, moneyFormatter } from '../../utils/Formatter'
import { SearchTransaction } from './components/SearchTransaction'
import {
  PriceHighLight,
  TransactionContainer,
  TransactionTable,
} from './styles'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })
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
                      {transaction.type === 'outcome' && '- '}
                      {moneyFormatter.format(transaction.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </>
  )
}
