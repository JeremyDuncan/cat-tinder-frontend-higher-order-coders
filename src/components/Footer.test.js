import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

describe("<Footer/>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("Navbar");
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
      div
    );
  });
  
  it("renders text information on footer", () => {
    const div = document.createElement("Navbar");
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
      div
    );
    const element = screen.getByRole('heading', { name: "Created By: Goran and Jeremy © 2022" });
    expect(element).toBeInTheDocument()

  });
});
