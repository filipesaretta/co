import { SummaryCard, SummaryContainer } from './styles'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { moneyFormatter } from '../../utils/Formatter'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Revenue</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>
        <strong>{moneyFormatter.format(summary.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Expenses</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>{moneyFormatter.format(summary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Profits</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>{moneyFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
