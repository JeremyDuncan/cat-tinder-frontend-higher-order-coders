import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("<Footer/>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("Navbar");
    render(<Footer />, div);
  });
});

describe("<Footer />", () => {
  test("Renders the footer for the user", () => {
    render(<Footer />);
    const element = screen.getByText("Created By");
    expect(element).toBeInTheDocument();
  });
});
