import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../../src/components/form/LoginForm"; // Adjust the path as necessary

describe("LoginForm with useFormik", () => {
  it("submits the form with email and password", async () => {
    const mockSubmit = vi.fn();
    render(<LoginForm onSubmit={mockSubmit} />);

    // Fill out the form
    const email = screen.getByLabelText(/email/i);
    await userEvent.type(email, "test@example.com");
    const password = screen.getByLabelText(/password/i);
    await userEvent.type(password, "myPassword");

    // Submit the form
    const submitButton = screen.getByRole("button", { name: /submit/i });
    await userEvent.click(submitButton);

    // Expect the mock submit function to have been called with the form values
    expect(mockSubmit).toHaveBeenCalledOnce();
    expect(mockSubmit).toHaveBeenCalledWith(
      {
        email: "test@example.com",
        password: "myPassword",
      }
      //   expect.anything()
    ); // useFormik's onSubmit passes both values and formikBag
  });
});
