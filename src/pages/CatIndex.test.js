import { render, renderWithContext, screen } from "@testing-library/react";
import CatCards from "../components/CatCards";
import mockCats from "../mockCats";
import CatIndex from "./CatIndex";

describe("<CatIndex/>", () => {
  // beforeEach(() => {
  //   render(<CatIndex cats={mockCats} />)
  // })

  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<CatIndex cats={mockCats} />, div);
  });

  test("Renders the Cat Index page for the user", () => {
    render(<CatIndex cats={mockCats} />);
    const element = screen.getByText("Cat Index");
    expect(element).toBeInTheDocument();
  });

  test("Renders the Cat Cards", () => {
      mockCats.forEach(cat => {
        const catName = screen.getByText(cat.name);
        screen.debug(catName);
        expect(catName).toBeInTheDocument()
      })
  });
});
