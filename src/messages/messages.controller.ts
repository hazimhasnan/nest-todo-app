import { Controller, Get, Post, Body, Param, Query, NotFoundException } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

/* 
    Exception Lists:
        1) press on the NotFoundException
        2) right click on the tab
        3) press on the view in explorer view
*/

@Controller('messages')
export class MessagesController {

    // verbose way to inject dependency
    messagesService: MessagesService

    constructor(messagesService: MessagesService) {
        this.messagesService = messagesService;
    }

// method decorator
// argument decorator

@Get()
async listMessages() {

}

@Get('/:id')
async getMessage(@Param('id') id: string, @Query('page') page: number){
    console.log(`the id is ${id} and the page is ${page}`)
}

@Post()
async createMessage(@Body() body: CreateMessageDTO) {
    console.log("this is the body:", body)
}

}
