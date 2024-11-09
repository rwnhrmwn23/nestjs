import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
export declare class BaseResponseExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void;
}
