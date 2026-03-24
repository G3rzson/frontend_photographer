import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "./page";

describe("HomePage", () => {
  it("renders main heading", () => {
    render(<HomePage />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders profile image with alt text", () => {
    render(<HomePage />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("alt");
  });
});
