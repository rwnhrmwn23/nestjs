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
exports.StudentResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const student_type_1 = require("./student.type");
const student_service_1 = require("./student.service");
const create_student_input_1 = require("./create-student.input");
let StudentResolver = class StudentResolver {
    constructor(studentService) {
        this.studentService = studentService;
    }
    students() {
        return this.studentService.getStudents();
    }
    student(id) {
        return this.studentService.getStudent(id);
    }
    createStudent(createStudentInput) {
        return this.studentService.createStudent(createStudentInput);
    }
};
exports.StudentResolver = StudentResolver;
__decorate([
    (0, graphql_1.Query)(() => [student_type_1.StudentType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentResolver.prototype, "students", null);
__decorate([
    (0, graphql_1.Query)(() => student_type_1.StudentType),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentResolver.prototype, "student", null);
__decorate([
    (0, graphql_1.Mutation)(() => student_type_1.StudentType),
    __param(0, (0, graphql_1.Args)('createStudentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_student_input_1.CreateStudentInput]),
    __metadata("design:returntype", void 0)
], StudentResolver.prototype, "createStudent", null);
exports.StudentResolver = StudentResolver = __decorate([
    (0, graphql_1.Resolver)(() => student_type_1.StudentType),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentResolver);
//# sourceMappingURL=student.resolver.js.map