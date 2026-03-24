import { describe, expect, it } from "vitest";
import { contactsSchema } from "./contactsSchema";

describe("contactsSchema", () => {
  it("validates correct data", () => {
    const validData = {
      name: "John Doe",
      message: "Hello, this is a test message.",
    };

    const result = contactsSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("invalidates incorrect data", () => {
    const invalidData = {
      name: "",
      message: "",
    };

    const result = contactsSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});
