import { render, screen } from "@testing-library/react";

import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import ErrorCom from "../../src/components/Error";
describe("Error Message", () => {
  it("renders error message", () => {
    render(<ErrorCom message="hello"></ErrorCom>);
    const err = screen.getByRole("heading");

    expect(err).toBeInTheDocument();
  });
});
