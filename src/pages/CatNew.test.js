import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import mockCats from "../mockCats";
import CatNew from "./CatNew";

describe("<CatNew />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CatNew/>
      </BrowserRouter>
    )
  })

  test("renders the CatNew page for the user", () => {
    const catNewHeading = screen.getByText(/cat new/i);
    expect(catNewHeading).toHaveTextContent("Cat New")
  });

  test("Has a form with entries for the name, age, enjoys, and image", () => {
    const nameLabel = screen.getByText(/cat name/i)
    expect(nameLabel.getAttribute("For")).toEqual("cat name")

    const ageLabel = screen.getByText(/cat age/i)
    expect(ageLabel.getAttribute("For")).toEqual("cat age")
  
    const enjoysLabel = screen.getByText(/cat enjoys/i)
    expect(enjoysLabel.getAttribute("For")).toEqual("cat enjoys")

    const imageLabel = screen.getByText(/cat image/i)
    expect(imageLabel.getAttribute("For")).toEqual("cat image")

  });

});q