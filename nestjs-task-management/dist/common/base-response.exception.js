"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseResponseExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
let BaseResponseExceptionFilter = class BaseResponseExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const errorResponse = exception instanceof common_1.HttpException
            ? exception.getResponse()
            : { message: 'Internal server error' };
        const message = Array.isArray(errorResponse.message)
            ? errorResponse.message.join(', ')
            : errorResponse.message;
        const baseErrorResponse = {
            statusCode: status,
            message: message,
            data: null,
        };
        response.status(200).json(baseErrorResponse);
    }
};
BaseResponseExceptionFilter = __decorate([
    (0, common_1.Catch)()
], BaseResponseExceptionFilter);
exports.BaseResponseExceptionFilter = BaseResponseExceptionFilter;
//# sourceMappingURL=base-response.exception.js.map