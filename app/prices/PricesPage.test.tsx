import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PricesPage from "./page";

describe("PricesPage", () => {
  it("renders page title", () => {
    render(<PricesPage />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders price list", () => {
    render(<PricesPage />);

    const priceItems = screen.getAllByRole("listitem");
    expect(priceItems.length).toBeGreaterThan(0);
  });
});
