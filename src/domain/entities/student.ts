import { randomUUID } from "node:crypto";
import { Entity } from "../../core/entities/entity";
import { S } from "vitest/dist/chunks/config.d.D2ROskhv";

interface StudentProps {
  name: string;
}

export class Student extends Entity<StudentProps> {
  get name(): string {
    return this.props.name;
  }
}
