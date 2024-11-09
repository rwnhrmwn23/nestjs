import { TasksService } from '../service/tasks.service';
import { CreateTaskDto } from '../dto/create-task.dto';
import { GetTasksFilterDto } from '../dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from '../dto/update-task-status.dto';
import { Task } from '../entity/tasks.entity';
import { User } from '../../auth/entity/user.entity';
import { BaseResponse } from '../../../common/base-response';
export declare class TasksController {
    private tasksService;
    private logger;
    constructor(tasksService: TasksService);
    getTasks(filterDto: GetTasksFilterDto, user: User): Promise<BaseResponse<Task[]>>;
    getTaskById(id: string, user: User): Promise<BaseResponse<Task>>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<BaseResponse<Task>>;
    updateTaskStatus(id: string, updateTaskStatusDto: UpdateTaskStatusDto, user: User): Promise<BaseResponse<Task>>;
    deleteTaskById(id: string, user: User): Promise<BaseResponse<any>>;
}
