import { Entity } from "@/core/entities/entity";
import { UniqueEntityId } from "@/domain/value-objects/unique-entity-id";

interface StudentProps {
  name: string;
}

export class Student extends Entity<StudentProps> {
  static create(props: StudentProps, id?: UniqueEntityId): Student {
    const student = new Student(props, id);
    return student;
  }
  get name(): string {
    return this.props.name;
  }
}
