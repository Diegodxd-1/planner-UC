import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import SetupPage from '@/app/setup/page'

const push = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push }),
}))

describe('SetupPage', () => {
  const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

  beforeEach(() => {
    jest.clearAllMocks()
    jest.useFakeTimers()
    Storage.prototype.removeItem = jest.fn()
    Storage.prototype.clear = jest.fn()
  })

  afterEach(() => {
    jest.useRealTimers()
    jest.restoreAllMocks()
  })

  afterAll(() => {
    consoleErrorSpy.mockRestore()
  })

  it('redirige al login si el admin ya existe', async () => {
    jest.spyOn(globalThis, 'fetch').mockResolvedValue({
      json: async () => ({ exists: true }),
    })

    render(<SetupPage />)

    expect(await screen.findByText(/admin ya existe/i)).toBeInTheDocument()
    jest.advanceTimersByTime(1500)

    await waitFor(() => {
      expect(push).toHaveBeenCalledWith('/login')
    })
  })

  it('crea el admin y redirige', async () => {
    jest.spyOn(globalThis, 'fetch').mockImplementation(async (_input, init) => ({
      json: async () => (init?.method === 'POST' ? { created: true } : { exists: false }),
    }))

    render(<SetupPage />)

    fireEvent.change(await screen.findByLabelText(/token de configuracion/i), {
      target: { value: 'setup-token' },
    })
    fireEvent.click(await screen.findByRole('button', { name: /crear usuario admin/i }))

    expect(globalThis.fetch).toHaveBeenCalledWith('/api/setup', {
      method: 'POST',
      headers: {
        'x-setup-token': 'setup-token',
      },
    })
    expect(await screen.findByText(/admin creado/i)).toBeInTheDocument()
    jest.advanceTimersByTime(1500)

    await waitFor(() => {
      expect(push).toHaveBeenCalledWith('/login')
    })
  })
})
