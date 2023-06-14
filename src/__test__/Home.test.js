import React from 'react'
import { render } from "@testing-library/react"
import Home from "../pages/Home"

describe("<Home />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Home />, div)
  })
})
// PASS  src/__test__/Footer.test.js
// Footer
//   ✓ renders the navbar with the correct text (14 ms)

