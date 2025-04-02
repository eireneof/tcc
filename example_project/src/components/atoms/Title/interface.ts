export interface TitleProps {
  id: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4'
  children: React.ReactNode
  accessibleName?: string
  isDecorative?: boolean
  tabIndex?: number
}
