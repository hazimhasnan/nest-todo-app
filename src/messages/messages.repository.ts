import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

/* 
    to inject the repository to the service:
        1) make the class injectable using @Injectable()
        2) then add it to the module 'providers'

    if this can be used in other module, then add it to the module 'exports'
*/

@Injectable()
export class MessagesRepository {
    async findOne(id: string): Promise<string>{
        const messages = await this.parseFile('message.json')

        return messages[id];
    }

    async findAll(): Promise<string>{
        const messages = await this.parseFile('messages.json')

        return messages;
    }

    async create(content: string): Promise<string>{
        const messages = await this.parseFile('messages.json')
        const id = Math.floor(Math.random() * 999)
        messages[id] = {id, content: content}
        await writeFile('message.json', JSON.stringify(messages))

        return messages
    }

    async parseFile(fileName: string): Promise<any> {
        const content = await readFile(fileName, 'utf8')
        const messages = JSON.parse(content)

        return messages
    }
}