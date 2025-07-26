import { Slug } from "./slug";

test("should create a Slug with a valid value", () => {
  const slugValue = "Example slug";
  const slug = Slug.createFromText(slugValue);

  expect(slug.value).toBe("example-slug");
});
