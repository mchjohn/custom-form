import { render, screen } from "@testing-library/react"

import { SignUp } from "./index"

describe('SignUp', () => {
  it('renders the SignUp form heading', () => {
    const { getByText } = render(<SignUp />);
    const headingElement = getByText('Fomulário de cadastro');

    expect(headingElement).toBeInTheDocument();
  });
});
