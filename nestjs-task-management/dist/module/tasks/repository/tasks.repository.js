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
exports.TasksRepository = void 0;
const typeorm_1 = require("typeorm");
const tasks_entity_1 = require("../entity/tasks.entity");
const common_1 = require("@nestjs/common");
const tasks_status_enum_1 = require("../entity/tasks-status.enum");
const query_helpers_1 = require("../../../common/query-helpers");
let TasksRepository = class TasksRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(tasks_entity_1.Task, dataSource.createEntityManager());
        this.dataSource = dataSource;
        this.logger = new common_1.Logger('TasksRepository');
    }
    async getTasks(filterDto, user) {
        const { status, search } = filterDto;
        const query = this.createQueryBuilder('task');
        query.where({ user });
        if (status) {
            query.andWhere('task.status = :status', { status });
        }
        if (search) {
            query.andWhere('(LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search))', { search: `%${search}%` });
        }
        const getData = query.getMany();
        return await (0, query_helpers_1.executeQueryWithLogging)(this.logger, user.username, 'getTasks()', 'Tasks retrieved successfully', () => getData);
    }
    async getTaskById(id, user) {
        const task = this.findOne({
            where: { id, user },
        });
        if (!task) {
            throw new common_1.NotFoundException(`Task with ID ${id} not found`);
        }
        return await (0, query_helpers_1.executeQueryWithLogging)(this.logger, user.username, 'getTaskById()', 'Tasks by id retrieved successfully', () => task);
    }
    async createTask(createTaskDto, user) {
        const { title, description } = createTaskDto;
        const task = this.create({
            title,
            description,
            status: tasks_status_enum_1.TaskStatus.OPEN,
            user,
        });
        const saveTask = this.save(task);
        return (0, query_helpers_1.executeQueryWithLogging)(this.logger, user.username, 'createTask()', 'Tasks created successfully', () => saveTask);
    }
    async deleteTaskById(id, user) {
        const result = await this.delete({ id, user });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Task with ${id} not found!`);
        }
        else {
            return (0, query_helpers_1.executeQueryWithLogging)(this.logger, user.username, 'deleteTaskById()', 'Tasks deleted successfully', () => null);
        }
    }
    async updateTaskStatus(id, status, user) {
        const result = await this.getTaskById(id, user);
        if (!result || !result.data) {
            throw new common_1.NotFoundException(`Task with ID ${id} not found for user ${user.username}`);
        }
        else {
            result.data.status = status;
            const saveTask = this.save(result.data);
            return (0, query_helpers_1.executeQueryWithLogging)(this.logger, user.username, 'updateTaskStatus()', 'Tasks updated successfully', () => saveTask);
        }
    }
};
TasksRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], TasksRepository);
exports.TasksRepository = TasksRepository;
//# sourceMappingURL=tasks.repository.js.map