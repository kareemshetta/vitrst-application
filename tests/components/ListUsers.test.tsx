import { render, screen } from "@testing-library/react";
import ListUsers from "../../src/components/ListUsers";
import { it, expect, describe } from "vitest";
describe("list users", () => {
  it("should render no users found ", () => {
    render(<ListUsers data={[]} />);
    const noUser = screen.getByText(/no users/i);
    expect(noUser).toBeInTheDocument();
  });
  it("should render list of users", () => {
    const data = ["ahmed ", "koko", "islam"];
    render(<ListUsers data={data} />);
    const usersList = screen.getByRole("list");
    const noUser = screen.queryByText(/no users/i);
    expect(noUser).not.toBeInTheDocument();
    const userListItems = screen.getAllByRole("listitem");
    expect(usersList).toBeInTheDocument();
    expect(userListItems).toHaveLength(3);
  });

  it("should render new list of users", () => {
    const data = ["ahmed", "koko", "islam"];
    render(<ListUsers data={data} />);
    data.forEach((item) => {
      const ListItems = screen.getByText(item);

      expect(ListItems).toBeInTheDocument();
      expect(ListItems).toHaveTextContent(item);
    });
  });
});
