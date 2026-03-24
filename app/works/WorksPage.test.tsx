import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import WorksPage from "./page";

describe("WorksPage", () => {
  it("renders page title", () => {
    render(<WorksPage />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders project titles", () => {
    render(<WorksPage />);

    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThan(0);
  });
});
