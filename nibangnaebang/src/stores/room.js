import { observable, action } from "mobx";
import faker from 'faker';

class RoomStore {
    @observable rooms = [
        {
            id:faker.random.uuid(),
            image:faker.image.avatar(),
            school:faker.lorem.word(),
            title:faker.lorem.sentence(),
            period:faker.lorem.words(),
            price:faker.random.number(),
        },
        {
            id:faker.random.uuid(),
            school:faker.lorem.word(),
            title:faker.lorem.sentence(),
            period:faker.lorem.words(),
            price:faker.random.number(),
        },
        {
            id:faker.random.uuid(),
            school:faker.lorem.word(),
            title:faker.lorem.sentence(),
            period:faker.lorem.words(),
            price:faker.random.number(),
        },
        {
            id:faker.random.uuid(),
            school:faker.lorem.word(),
            title:faker.lorem.sentence(),
            period:faker.lorem.words(),
            price:faker.random.number(),
        },
        {
            id:faker.random.uuid(),
            school:faker.lorem.word(),
            title:faker.lorem.sentence(),
            period:faker.lorem.words(),
            price:faker.random.number(),
        },
    ];
}
export default new RoomStore();