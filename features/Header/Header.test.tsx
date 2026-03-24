import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Header from "./Components/Header";
import { NAV_LINKS } from "@/constants/constants";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Header", () => {
  it("renders header as navigation landmark", () => {
    render(<Header />);

    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("renders logo with link to homepage", () => {
    render(<Header />);

    const logoLink = screen.getByRole("link", { name: /logo/i });
    expect(logoLink).toHaveAttribute("href", "/");
  });

  it("renders logo image with alt text", () => {
    render(<Header />);

    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders correct number of navigation items", () => {
    render(<Header />);

    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThanOrEqual(NAV_LINKS.length + 1); // +1 a logo link
  });

  it("renders mobile menu button on small screens", () => {
    render(<Header />);

    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThan(0);
  });

  it("navigation links have correct href attributes", () => {
    render(<Header />);

    NAV_LINKS.forEach((link) => {
      const navLinks = screen.getAllByRole("link", { name: link.title });
      const hasCorrectHref = navLinks.some(
        (navLink) => navLink.getAttribute("href") === link.href,
      );
      expect(hasCorrectHref).toBe(true);
    });
  });
});
