import { afterEach, beforeAll, afterAll } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { server } from "../src/mock/server";
afterEach(() => {
  cleanup();
  server.resetHandlers();
});

beforeAll(() => server.listen());

afterAll(() => server.close());
