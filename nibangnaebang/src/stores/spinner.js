import { action, observable } from "mobx";

class SpinnerStore {
    @observable spinning = false;

    @action spin = () => {
        this.spinning = true;
    }

    @action stop = () => {
        this.spinning = false;
    }
}
export default new SpinnerStore();