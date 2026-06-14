import '@testing-library/jest-dom'
import 'whatwg-fetch'
import { TextDecoder, TextEncoder } from 'node:util'
import { server } from '@/test/msw/server'

if (!globalThis.TextEncoder) {
  globalThis.TextEncoder = TextEncoder
}

if (!globalThis.TextDecoder) {
  Object.defineProperty(globalThis, 'TextDecoder', {
    value: TextDecoder,
    writable: true,
  })
}

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
