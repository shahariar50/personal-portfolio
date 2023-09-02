import { render, screen } from "@testing-library/react";
import Container from "./Container";

describe("Container", () => {
  it("renders correctly!", () => {
    render(<Container>Hello</Container>);
    const containerElement = screen.getByText("Hello");
    expect(containerElement).toBeInTheDocument();
  });

  it("render className Correctly", () => {
    render(<Container className="testingClass">Hello</Container>);
    const containerWrapperElement = screen.getByRole("container-wrapper");
    expect(containerWrapperElement.classList.contains("testingClass")).toBe(
      true
    );
  });
});
