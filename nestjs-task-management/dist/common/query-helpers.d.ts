import { Logger } from '@nestjs/common';
import { BaseResponse } from './base-response';
export declare function executeQueryWithLogging<T>(logger: Logger, user: string, nameFunction: string, successMessage: string, action: () => Promise<T>): Promise<BaseResponse<T>>;
