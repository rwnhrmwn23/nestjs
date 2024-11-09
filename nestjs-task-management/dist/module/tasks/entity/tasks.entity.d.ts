import { TaskStatus } from './tasks-status.enum';
import { User } from '../../auth/entity/user.entity';
export declare class Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    user: User;
}
