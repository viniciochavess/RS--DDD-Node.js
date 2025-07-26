import { UniqueEntityId } from "@/domain/value-objects/unique-entity-id";

class Entity<T> {
  private _id: UniqueEntityId;

  get id() {
    return this._id.toValue();
  }
  protected props: T;

  protected constructor(props: T, id?: UniqueEntityId) {
    this._id = id ?? new UniqueEntityId();
    this.props = props;
  }
}

export { Entity };
