import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from './messages.repository';
import { MessagesService } from './messages.service';

/* 
  module fields:
    1) set the providers as the PowerService
    2) set the exports to make the module service public (default is private)
    3) set imports to import other module into the current module
    4) set the providers to use in module services
    5) set the controllers to use in module controller

    providers are classes that can be used as dependencies for other classes
*/

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository],
  exports: [MessagesService]
})
export class MessagesModule {}
