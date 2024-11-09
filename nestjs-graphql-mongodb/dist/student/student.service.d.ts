import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';
import { MongoRepository } from 'typeorm';
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: MongoRepository<Student>);
    getStudent(id: string): Promise<Student>;
    getStudents(): Promise<Student[]>;
    createStudent(createStudentInput: CreateStudentInput): Promise<Student>;
    getManyStudents(studentIds: string[]): Promise<Student[]>;
}
