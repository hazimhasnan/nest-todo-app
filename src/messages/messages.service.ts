import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

@Injectable() // to register the class to the nest DI container
export class MessagesService {
    //using typescript syntatic sugar as the constructor
    constructor(private messageRepository: MessagesRepository){}

    async findOne(id: string): Promise<string>{
        const message = await this.messageRepository.findOne(id)
        return message
    }

    async findAll(): Promise<string>{
        const mesages = await this.findAll()
        return mesages
    }

    async create(content: string): Promise<string>{
        const message = await this.create(content)
        return message
    }
}