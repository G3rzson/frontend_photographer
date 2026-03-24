import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ContactsPage from "./page";

describe("ContactsPage", () => {
  it("renders page title", () => {
    render(<ContactsPage />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders contact form", () => {
    render(<ContactsPage />);

    const contactForm = screen.getByTestId("contacts-form");
    expect(contactForm).toBeInTheDocument();
  });

  it("renders contact form fields", () => {
    render(<ContactsPage />);

    const nameField = screen.getByLabelText(/Név \*/i);
    const messageField = screen.getByLabelText(/Üzenet \*/i);
    expect(nameField).toBeInTheDocument();
    expect(messageField).toBeInTheDocument();
  });

  it("renders contact form submit button", () => {
    render(<ContactsPage />);

    const submitButton = screen.getByRole("button", { name: /Küldés/i });
    expect(submitButton).toBeInTheDocument();
  });

  it("renders contact information", () => {
    render(<ContactsPage />);
    const contactInfo = screen.getByText(/Elérhetőségek:/i);
    expect(contactInfo).toBeInTheDocument();
  });
});
