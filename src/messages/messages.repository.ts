import { readFile, writeFile } from "fs/promises";

export class MessageRepository {
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