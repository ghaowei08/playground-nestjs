import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = process.env.APP_PORT ?? 3000;
  await app.listen(port);
  Logger.log(`APP START AT PORT ${port}`);
}
bootstrap();
