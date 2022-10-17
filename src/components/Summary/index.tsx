import { SummaryCard, SummaryContainer } from './styles'

import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Revenue</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>
        <strong>R$ 17.5000,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Expenses</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>R$ 7.5000,00</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Profits</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>R$ 10.000,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
