import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("<Header/>", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    );
  });

  it("renders text information on Header", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    );
    const element = screen.getByRole("link", { name: "logo Cat Tinder" });
    expect(element).toBeInTheDocument();
  });

  it("Has clickable links", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    );

    userEvent.click(screen.getByText("Home"))
    expect(screen.getByText("Home")).toBeInDocument
    userEvent.click(screen.getByText("Index"))
    expect(screen.getByText("Index")).toBeInDocument
    userEvent.click(screen.getByText("Edit"))
    expect(screen.getByText("Edit")).toBeInDocument
    userEvent.click(screen.getByText("Show"))
    expect(screen.getByText("Show")).toBeInDocument
    userEvent.click(screen.getByText("New"))
    expect(screen.getByText("New")).toBeInDocument
  });
});