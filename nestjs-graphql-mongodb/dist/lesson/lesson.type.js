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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonType = void 0;
const graphql_1 = require("@nestjs/graphql");
const student_type_1 = require("../student/student.type");
let LessonType = class LessonType {
};
exports.LessonType = LessonType;
__decorate([
    (0, graphql_1.Field)(type => graphql_1.ID),
    __metadata("design:type", String)
], LessonType.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LessonType.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LessonType.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LessonType.prototype, "endDate", void 0);
__decorate([
    (0, graphql_1.Field)(type => [student_type_1.StudentType]),
    __metadata("design:type", Array)
], LessonType.prototype, "students", void 0);
exports.LessonType = LessonType = __decorate([
    (0, graphql_1.ObjectType)('Lesson')
], LessonType);
//# sourceMappingURL=lesson.type.js.map