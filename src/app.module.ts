import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';

/*
The imports can import all the modules that we have defined in the projects
we can use this way to bundle up all the controllers and services associated
the module
*/

/* 
  multiline comment:  shift + alt + A 
*/

@Module({
  imports: [MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
