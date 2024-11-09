"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksModule = void 0;
const common_1 = require("@nestjs/common");
const tasks_controller_1 = require("../controller/tasks.controller");
const tasks_service_1 = require("../service/tasks.service");
const typeorm_1 = require("@nestjs/typeorm");
const tasks_repository_1 = require("../repository/tasks.repository");
const tasks_entity_1 = require("../entity/tasks.entity");
const auth_module_1 = require("../../auth/module/auth.module");
let TasksModule = class TasksModule {
};
TasksModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tasks_entity_1.Task]), auth_module_1.AuthModule],
        controllers: [tasks_controller_1.TasksController],
        providers: [tasks_service_1.TasksService, tasks_repository_1.TasksRepository],
    })
], TasksModule);
exports.TasksModule = TasksModule;
//# sourceMappingURL=tasks.module.js.map