import { Entity } from "../../core/entities/entity";


interface StudentProps {
  name: string;
}

export class Student extends Entity<StudentProps> {
  get name(): string {
    return this.props.name;
  }
}
