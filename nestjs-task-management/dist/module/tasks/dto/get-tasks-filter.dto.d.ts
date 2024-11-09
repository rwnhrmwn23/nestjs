import { TaskStatus } from '../entity/tasks-status.enum';
export declare class GetTasksFilterDto {
    status?: TaskStatus;
    search?: string;
}
