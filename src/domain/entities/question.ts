import { Entity } from "../../core/entities/entity";
import { Optional } from "../../core/types/optional";
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
  static create(
    props: Optional<QuestionProps, "createdAt">,
    id?: UniqueEntityId
  ): Question {
    const question = new Question(
      {
        ...props,
        createdAt: new Date(),
      },
      id
    );
    return question;
  }
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
