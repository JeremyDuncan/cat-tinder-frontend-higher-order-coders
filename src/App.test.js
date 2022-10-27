import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";


describe("<NotFound/>", () => {
  test("renders heading element from App.js from other component", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const headingElement = screen.getByRole("heading", { name: /Create/ });
    expect(headingElement).toBeInTheDocument();
  });
});
