// src/tests/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import '@testing-library/jest-dom'

import lightTheme from '../styles/themes/custom/lightTheme'
import Button from '../components/atoms/Button'

describe('Button Component', () => {
  const renderWithTheme = (component: React.ReactNode) => {
    return render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>)
  }

  it('should call onClick handler when clicked', () => {
    const mockOnClick = jest.fn()
    renderWithTheme(
      <Button
        id="theme-switch-button"
        dataTestId="theme-switch-button"
        onClick={mockOnClick}
      >
        Alternar Tema
      </Button>,
    )

    const button = screen.getByTestId('theme-switch-button')
    fireEvent.click(button)

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it('should render with correct attributes', () => {
    const id: string = 'tested-button'
    const dataTestId: string = id
    const label: string = 'Tested Button'
    renderWithTheme(
      <Button id={id} dataTestId={dataTestId} onClick={() => {}}>
        {label}
      </Button>,
    )

    const button = screen.getByTestId(dataTestId)
    expect(button).toHaveAttribute('id', id)
    expect(button).toHaveTextContent(label)
  })
})
