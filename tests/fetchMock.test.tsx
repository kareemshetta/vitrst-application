import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
// import user from "@testing-library/user-event";
import FetchDataComponent from "../src/components/fetchMock";
import { server } from "../src/mock/server";
import { HttpResponse, http } from "msw";

describe("mocking", () => {
  it("counter renders correctly", async () => {
    render(<FetchDataComponent />);
    const counter = screen.getByRole("heading");
    expect(counter).toBeInTheDocument();
    const posts = await screen.findAllByRole("listitem");
    expect(posts).toHaveLength(3);
    // const countButton = screen.getByRole("button");
    // expect(countButton).toBeInTheDocument();
  });
  it("should shows error", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/posts", () => {
        return HttpResponse.json(null, { status: 500 });
      })
    );
    render(<FetchDataComponent />);
    const error = await screen.findByText("Network response was not ok");

    expect(error).toBeInTheDocument();
  });
});
