import { render, screen } from "@testing-library/react"

import App from "./App"

describe('Jest', () => {
  it('should work', () => {
    expect(1).toBe(1)
  })

  it('should display App component', () => {
    render(<App />)

    screen.debug()
  })
})
