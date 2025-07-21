import { Entity } from "../../core/entities/entity";
import { Slug } from "./value-objects/slug";
import { UniqueEntityId } from "./value-objects/unique-entity-id";
interface QuestionProps {
  authorId: UniqueEntityId;
  bestAnswerId?: UniqueEntityId;
  title: string;
  content: string;
  slug: Slug;
  createdAt: Date;
  updatedAt?: Date;
}
export class Question extends Entity<QuestionProps> {
  get title(): string {
    return this.props.title;
  }
  get content(): string {
    return this.props.content;
  }
  get authorId(): UniqueEntityId {
    return this.props.authorId;
  }
  get slug(): Slug {
    return this.props.slug;
  }
}
