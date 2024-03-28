import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { it, expect, describe } from "vitest";
describe("user acount", () => {
  const user = { name: "John", isAdmin: true };
  it("should render correctly", () => {
    render(<UserAccount name={user.name} />);
    const heading = screen.getByText(/john/i);
    expect(heading).toBeInTheDocument();
  });
  it("should not render login button", () => {
    render(<UserAccount name={user.name} />);
    const button = screen.queryByText(/login/i);
    expect(button).not.toBeInTheDocument();
  });

  it("should render login button", () => {
    user.isAdmin = true;
    render(<UserAccount name={user.name} isAdmin={user.isAdmin} />);
    const button = screen.queryByText(/login/i);
    expect(button).toBeInTheDocument();
  });
});
