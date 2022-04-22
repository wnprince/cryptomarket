export interface MarketTrendsProps {
    expanded?: boolean
}

export interface LayoutProps {
    children?: any
}

export interface TrendRowProps {
    name: string
    symbol: string
    price_usd: string
    percent_change_1h: string
    market_cap_usd: string
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