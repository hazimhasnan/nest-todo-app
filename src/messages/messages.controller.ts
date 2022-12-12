import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
// method decarotr
// argument decorator

@Get()
listMessages() {

}

@Get('/:id')
getMessage(@Param('id') id: string, @Query('page') page: number){
    console.log(`the id is ${id} and the page is ${page}`)
}

@Post()
createMessage(@Body() body: CreateMessageDTO) {
    console.log("this is the body:", body)
}

}
