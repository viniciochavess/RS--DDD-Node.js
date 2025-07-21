import { randomUUID } from "node:crypto";

class Entity<T> {
  private _id: string;

  get id(): string {
    return this._id;
  }
  protected props: T;

  constructor(props: T, id?: string) {
    this._id = id ?? randomUUID();
    this.props = props;
  }
}

export { Entity };
