export const marketTrends = [
    {
        name: 'Bitcoin',
        symbol: 'BTC',
        lastPrice: '$56,623.54',
        marketcap: '$56,623.54',
        change: 1.41,
    },
    {
        name: 'Bitcoin',
        symbol: 'BTC',
        lastPrice: '$56,623.54',
        marketcap: '$56,623.54',
        change: 1.41,
    },
    {
        name: 'Bitcoin',
        symbol: 'BTC',
        lastPrice: '$56,623.54',
        marketcap: '$56,623.54',
        change: 1.41,
    },
    {
        name: 'Bitcoin',
        symbol: 'BTC',
        lastPrice: '$56,623.54',
        marketcap: '$56,623.54',
        change: 1.41,
    },
    {
        name: 'Bitcoin',
        symbol: 'BTC',
        lastPrice: '$56,623.54',
        marketcap: '$56,623.54',
        change: 1.41,
    },
    {
        name: 'Bitcoin',
        symbol: 'BTC',
        lastPrice: '$56,623.54',
        marketcap: '$56,623.54',
        change: 1.41,
    },
]

export interface MarketTrendsProps {
    expanded?: boolean
}

export interface LayoutProps {
    children?: any
}

export interface TrendRowProps {
    name: string
    symbol: string
    lastPrice: string
    marketcap: string
    change: number
}

export interface LinkGroupProps {
    title: string
    links: Array<string>
}

export interface CardProps {
    title: string
    description: string
}

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    children: any
    variant?: 'md' | 'lg'
}