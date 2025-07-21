import { Entity } from "../../core/entities/entity";
import { UniqueEntityId } from "./value-objects/unique-entity-id";

interface AnswerProps {
  authorId: UniqueEntityId;
  questionId: UniqueEntityId;
  content: string;
  createdAt: Date;
  updateAt?: Date;
}
export class Answer extends Entity<AnswerProps> {
  static create(
    props: Omit<AnswerProps, "createdAt">,
    id?: UniqueEntityId
  ): Answer {
    const answer = new Answer(
      {
        ...props,
        createdAt: new Date(),
      },
      id
    );
    return answer;
  }

  get content(): string {
    return this.props.content;
  }
  get authorId(): UniqueEntityId {
    return this.props.authorId;
  }
  get questionId(): UniqueEntityId {
    return this.props.questionId;
  }
}
