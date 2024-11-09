"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const uuid_1 = require("uuid");
const student_entity_1 = require("./student.entity");
const typeorm_2 = require("typeorm");
let StudentService = class StudentService {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    async getStudent(id) {
        return this.studentRepository.findOne({ where: { id } });
    }
    async getStudents() {
        return this.studentRepository.find();
    }
    async createStudent(createStudentInput) {
        const { firstName, lastName } = createStudentInput;
        const student = this.studentRepository.create({
            id: (0, uuid_1.v4)(),
            firstName,
            lastName,
        });
        return this.studentRepository.save(student);
    }
    async getManyStudents(studentIds) {
        return await this.studentRepository.find({
            where: {
                id: { $in: studentIds },
            },
        });
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    __metadata("design:paramtypes", [typeorm_2.MongoRepository])
], StudentService);
//# sourceMappingURL=student.service.js.map