import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* 
    set the whitelist to true removes the field that is
    not annotated in the DTO

    can even return error if needed
    refer: https://progressivecoder.com/how-to-use-inbuilt-nestjs-validationpipe/
  */
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }
  ))
  await app.listen(3001);
}
bootstrap();
