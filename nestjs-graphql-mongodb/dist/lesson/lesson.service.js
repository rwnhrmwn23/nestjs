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
exports.LessonService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const lesson_entity_1 = require("./lesson.entity");
const typeorm_2 = require("typeorm");
const uuid_1 = require("uuid");
let LessonService = class LessonService {
    constructor(lessonRepository) {
        this.lessonRepository = lessonRepository;
    }
    async getLesson(id) {
        return this.lessonRepository.findOne({ where: { id } });
    }
    async getLessons() {
        return this.lessonRepository.find();
    }
    async createLesson(createLessonInput) {
        const { name, startDate, endDate, students } = createLessonInput;
        const lesson = this.lessonRepository.create({
            id: (0, uuid_1.v4)(),
            name,
            startDate,
            endDate,
            students
        });
        return this.lessonRepository.save(lesson);
    }
    async assignStudentsToLesson(lessonId, studentIds) {
        const lesson = await this.lessonRepository.findOne({
            where: { id: lessonId }
        });
        lesson.students = [...lesson.students, ...studentIds];
        return this.lessonRepository.save(lesson);
    }
};
exports.LessonService = LessonService;
exports.LessonService = LessonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(lesson_entity_1.Lesson)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LessonService);
//# sourceMappingURL=lesson.service.js.map