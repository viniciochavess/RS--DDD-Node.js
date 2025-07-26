import { Entity } from "@/core/entities/entity";
import { Optional } from "@/core/types/optional";
import { Slug } from "@/domain/value-objects/slug";
import { UniqueEntityId } from "@/domain/value-objects/unique-entity-id";
import dayjs from "dayjs";

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
    props: Optional<QuestionProps, "createdAt" | "slug">,
    id?: UniqueEntityId
  ): Question {
    const question = new Question(
      {
        ...props,
        createdAt: new Date(),
        slug: props.slug ?? Slug.createFromText(props.title),
      },
      id
    );
    return question;
  }
  private touch() {
    this.props.updatedAt = new Date();
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
  get bestAnswerId(): UniqueEntityId | undefined {
    return this.props.bestAnswerId;
  }
  get createdAt(): Date {
    return this.props.createdAt;
  }
  get updatedAt(): Date | undefined {
    return this.props.updatedAt;
  }
  get isNew(): boolean {
    return dayjs().diff(this.props.createdAt, "day") < 3;
  }
  get excerpt(): string {
    return this.props.content.substring(0, 120).trim().concat("...");
  }
  set content(content: string) {
    this.props.content = content;
    this.touch();
  }

  set title(title: string) {
    this.props.title = title;
    this.props.slug = Slug.createFromText(title);
    this.touch();
  }

  set bestAnswerId(bestAnswerId: UniqueEntityId) {
    this.props.bestAnswerId = bestAnswerId;
    this.touch();
  }
}
