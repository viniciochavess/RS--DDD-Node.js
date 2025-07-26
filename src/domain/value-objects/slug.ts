class Slug {
  constructor(public value: string) {}
  static createFromText(text: string) {
    const slugValue = text
      .normalize("NFKD")
      .normalize("NFKD")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/_/g, "-")
      .replace(/--+/g, "-")
      .replace(/-$/g, "");

    return new Slug(slugValue);
  }
}

export { Slug };
