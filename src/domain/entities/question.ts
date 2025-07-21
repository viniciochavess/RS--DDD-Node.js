import { Entity } from "../../core/entities/entity";
import { Slug } from "./value-objects/slug";
interface QuestionProps {
  title: string;
  content: string;
  authorId: string;
  slug: Slug;
}
export class Question extends Entity<QuestionProps> {
  get title(): string {
    return this.props.title;
  }
  get content(): string {
    return this.props.content;
  }
  get authorId(): string {
    return this.props.authorId;
  }
  get slug(): Slug {
    return this.props.slug;
  }
}
