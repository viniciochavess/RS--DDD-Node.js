import { expect, it, test } from "vitest";

test("should create a Slug with a valid value", () => {
  const slugValue = "example slug";
  const slug = Slug.createFromText(slugValue);

  expect(slug.value).toBe("example-slug");
});
