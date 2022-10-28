import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("<Home/>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<Home />, div);
  });

  test("Renders the home page for the user", () => {
    render(<Home />);
    const element = screen.getByText("Welcome to Cat Tinder, the place where cats nip!");
    expect(element).toBeInTheDocument();
  });
});
