import { Task } from '../../tasks/entity/tasks.entity';
export declare class User {
    id: string;
    username: string;
    password: string;
    tasks: Task[];
}
