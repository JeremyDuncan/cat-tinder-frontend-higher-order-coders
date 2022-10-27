import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";

describe("<NotFound/>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<NotFound />, div);
  });

  test("Renders the NotFound page for the user", () => {
    render(<NotFound />);
    const element = screen.getByText("404: Page Not Found");
    expect(element).toBeInTheDocument();
  });
});
