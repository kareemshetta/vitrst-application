import useCounter from "./useCounter";
import user from "@testing-library/user-event";
import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
// import { act } from "react-dom/test-utils";
import { act } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
describe("hook component tests", () => {
  it("test component", () => {
    const { result } = renderHook(useCounter);

    user.setup();
    expect(result.current.count).toBe(0);
    act(() => result.current.increment(1));
    act(() => result.current.increment(1));
    expect(result.current.count).toBe(2);
  });
});
