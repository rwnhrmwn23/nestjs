import { StudentService } from "./student.service";
import { CreateStudentInput } from "./create-student.input";
import { Student } from "./student.entity";
export declare class StudentResolver {
    private studentService;
    constructor(studentService: StudentService);
    students(): Promise<Student[]>;
    student(id: string): Promise<Student>;
    createStudent(createStudentInput: CreateStudentInput): Promise<Student>;
}
