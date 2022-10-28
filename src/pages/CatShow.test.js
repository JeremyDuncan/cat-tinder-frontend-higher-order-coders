import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes, useParams } from "react-router-dom";
import mockCats from "../mockCats";
import CatShow from "./CatShow";

describe("<CatShow />", () => {
  it("renders without crashing", () => {
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
});
