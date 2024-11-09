import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './common/transform.interceptors';
import { BaseResponseExceptionFilter } from './common/base-response.exception';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger();
  const configService = new ConfigService();
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new BaseResponseExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  const port = configService.get('PORT');
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();
