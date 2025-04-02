export interface IButton {
  readonly id: string
  readonly children: React.ReactNode
  readonly onClick?: () => void
  dataTestId?: string
}
