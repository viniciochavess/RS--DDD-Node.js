import { randomUUID } from "node:crypto";
import { UniqueEntityId } from "../../domain/entities/value-objects/unique-entity-id";

class Entity<T> {
  private _id: UniqueEntityId;

  get id() {
    return this._id.toValue();
  }
  protected props: T;

  constructor(props: T, id?: string) {
    this._id = new UniqueEntityId(id);
    this.props = props;
  }
}

export { Entity };
