import { observable, action } from "mobx";
import faker from 'faker';

class MessageStore {
    @observable messages = [
        {
            id:faker.random.uuid(),
            from:faker.random.uuid(),
            to:faker.random.uuid(),
            message:faker.lorem.sentence(),
            date:faker.date.recent(),
        }
    ]
    @observable messagesList = [
        {
            id:faker.random.uuid(),
            from:faker.random.uuid(),
            to:faker.random.uuid(),
            message:faker.lorem.sentence(),
            date:faker.date.recent(),
        }
    ]
}
export default new MessageStore();