import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Root from "../src/Root/Root";


describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

describe("Root Component", () => {
  it("should render the component without errors", () => {
    const { container } = render(
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    );
    expect(container).toBeDefined();
  });
  it("should render with the desired DOM layout", () => {
    render(
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    );
    screen.debug();
  });
  it("should render a text that says 'Shop now'", () => {
    render(
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    );
    screen.getByText("Shop now");
  });
  it("should render a text that says 'Your Destination for Quality and Style.'", () => {
    render(
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    );
    screen.getByText("Your Destination for Quality and Style.");
  });
});