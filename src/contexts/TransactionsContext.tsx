import { ReactNode, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface Transactions {
  id: number
  description: string
  price: number
  type: 'income' | 'outcome'
  category: string
  createdAt: string
}

interface CreateNewTransactionProps {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: Transactions[]
  fetchTransactions: (query?: string) => Promise<void>
  createNewTransaction: (data: CreateNewTransactionProps) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: { q: query },
    })

    setTransactions(response.data)
  }

  async function createNewTransaction(data: CreateNewTransactionProps) {
    const { category, description, price, type } = data

    const response = await api.post('/transactions', {
      category,
      description,
      price,
      type,
      createdAt: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
