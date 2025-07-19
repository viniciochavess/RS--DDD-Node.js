import { Slug } from "./value-objects/slug";
interface QuestionProps {
  title: string;
  content: string;
  authorId: string;
  slug: Slug;
}
export class Question {
  public id?: string;
  public title: string;
  public slug: Slug;
  public content: string;
  public authorId: string;

  constructor(props: QuestionProps, id?: string) {
    this.slug = props.slug;
    this.title = props.title;
    this.content = props.content;
    this.authorId = props.authorId;
    this.id = id ?? crypto.randomUUID();
  }
}
