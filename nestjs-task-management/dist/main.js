"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./module/app.module");
const common_1 = require("@nestjs/common");
const transform_interceptors_1 = require("./common/transform.interceptors");
const base_response_exception_1 = require("./common/base-response.exception");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const logger = new common_1.Logger();
    const configService = new config_1.ConfigService();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new base_response_exception_1.BaseResponseExceptionFilter());
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalInterceptors(new transform_interceptors_1.TransformInterceptor());
    const port = configService.get('PORT');
    await app.listen(port);
    logger.log(`Application listening on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map