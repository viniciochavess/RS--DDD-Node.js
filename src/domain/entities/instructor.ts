import { randomUUID } from "node:crypto";
import { Entity } from "../../core/entities/entity";

interface InstructorProps {
  name: string;
}

export class Instructor extends Entity<InstructorProps> {
  get name(): string {
    return this.props.name;
  }
}
