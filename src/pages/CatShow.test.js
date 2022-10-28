import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import mockCats from "../mockCats";
import CatShow from "./CatShow";

describe("<CatShow />", () => {
  it("passes the params for the Cat ID", () => {
    render(
      <MemoryRouter initialEntries={["/catshow/1"]}>
        <Routes>
          <Route path="/catshow/:id" element={<CatShow cats={mockCats} />} />
        </Routes>
      </MemoryRouter>
    );
    const showRender = screen.getByText(/sunshine/i);
    screen.debug(showRender);
  });
  test("Renders show page for the user", () => {
    render(<CatShow cats={mockCats} />);
    const element = screen.getByText("Cat Show");
    expect(element).toBeInTheDocument();
  });
});
