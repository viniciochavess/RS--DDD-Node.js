class Slug{
    constructor(public value:string){}
    static createFromText(text:string) {
        const slugValue = text.normalize("NFKD")
        .toLocaleLowerCase()
        .trim()
        .replace(/\s+/g, "")
        .replace(/[^\w]+/g, "")
        .replace(/_/g, "-")
        .replace(/--/g, "-")
        .replace(/-$/, "")

        return new Slug(slugValue);
    }
}