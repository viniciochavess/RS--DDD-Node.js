import { randomUUID } from "node:crypto";

export class UniqueEntityId {
  private value: string;
  constructor(value?: string) {
    this.value = value ?? randomUUID();
  }

  toString(): string {
    return this.value;
  }

  toValue(): string {
    return this.value;
  }
}
