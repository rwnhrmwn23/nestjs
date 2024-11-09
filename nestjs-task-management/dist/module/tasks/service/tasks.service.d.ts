import { TasksRepository } from '../repository/tasks.repository';
import { Task } from '../entity/tasks.entity';
import { CreateTaskDto } from '../dto/create-task.dto';
import { TaskStatus } from '../entity/tasks-status.enum';
import { GetTasksFilterDto } from '../dto/get-tasks-filter.dto';
import { User } from '../../auth/entity/user.entity';
import { BaseResponse } from '../../../common/base-response';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: TasksRepository);
    getTasks(filterDto: GetTasksFilterDto, user: User): Promise<BaseResponse<Task[]>>;
    getTaskById(id: string, user: User): Promise<BaseResponse<Task>>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<BaseResponse<Task>>;
    deleteTaskById(id: string, user: User): Promise<BaseResponse<any>>;
    updateTaskStatus(id: string, status: TaskStatus, user: User): Promise<BaseResponse<Task>>;
}
