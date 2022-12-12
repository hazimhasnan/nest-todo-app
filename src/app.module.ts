import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';

/*
---> The app.module is our top module to be use by the NestFactory

---> The imports can import all the modules that we have defined in the projects
      we can use this way to bundle up all the controllers and services associated
      the module

      can also use anything exported service that the imported module exposed 
      through its 'exports'
*/

/* 
  multiline comment:  shift + alt + A 
*/

@Module({
  imports: [MessagesModule, AuthModule, UsersModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
