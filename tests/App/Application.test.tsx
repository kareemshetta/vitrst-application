import { render, screen } from "@testing-library/react";
import Application from "./Application";
import { describe, it, expect } from "vitest";

describe("form test", () => {
  it("renders correctly", async () => {
    render(<Application />);

    const nameInput = screen.getByRole("textbox", { name: "Input:" });
    expect(nameInput).toBeInTheDocument();
    const textInput = screen.getByRole("textbox", { name: "textArea" });
    expect(textInput).toBeInTheDocument();
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    const malak = screen.getByRole("heading", { name: "malak" });
    expect(malak).toBeInTheDocument();
    const kareem = screen.getByRole("heading", { name: "kareem" });
    expect(kareem).toBeInTheDocument();

    // const login = screen.getByRole("button", { name: "login" });
    // expect(login).toBeInTheDocument();
    // const learing = screen.queryByRole("button", { name: "start learning" });
    // expect(learing).not.toBeInTheDocument();
    const learing = await screen.findByRole(
      "button",
      {
        name: "start learning",
      },
      { timeout: 5000 }
    );
    expect(learing).toBeInTheDocument();
  });
});
