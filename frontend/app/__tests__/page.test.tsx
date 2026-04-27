import { render, screen } from '@testing-library/react'
import { describe, it, expect } from '@jest/globals'
import Page from '../page'

describe('Page', () => {
  it('renders', () => {
    render(<Page />)
    // Ajusta este assertion según lo que renderice tu página
    expect(screen.getByRole('main')).toBeDefined()
  })
})
