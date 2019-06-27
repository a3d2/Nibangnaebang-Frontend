import { observable, action } from "mobx";
import faker from 'faker';

class AuthStore {
    @observable user = {}

    @action
    tour = () => {
        this.user = {
            id:'tourist'
        }
    }

    @action
    login = () => {
        this.user =  {
            name:faker.name.firstName(),
            id:faker.lorem.word(),
            school:faker.lorem.word(),
            image:faker.image.avatar(),
        }
    }

    @action
    logout = () => {
        this.user = {}
    }
}
export default new AuthStore();