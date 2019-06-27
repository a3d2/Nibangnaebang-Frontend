import { observable, action } from "mobx";
import faker from 'faker';
import { BASE_URI } from "../constants/const";
import { getBody, tuneObjectWithKey } from "../utils/utils";

class RoomStore {
    @observable rooms = {
        
    };

    @action
    loadRooms = async () => {
        return fetch(`${BASE_URI}`, {
            method: 'POST',
            body:getBody({
                query:"ShowList"
            })
        })
        .then(res => res.json())
        .then(({ code, room }) => {
            if(room) {
                const tuned = tuneObjectWithKey(room, 'No');
                this.rooms = { ...this.artists, ...tuned };
            }
            return new Promise((resolve, _) => {
                resolve(room);
            })
        })
        .catch(error => {
            this.fetching = false;
            console.error(error);
        });
    }

    @action
    loadRoomDetail = async (no) => {
        return fetch(`${BASE_URI}`, {
            method: 'POST',
            body:getBody({
                query:"Find",
                RoomNo:no
            })
        })
        .then(res => res.json())
        .then((detail) => {
            this.rooms[no] = { ...this.rooms[no], ...detail }

            return new Promise((resolve, _) => {
                resolve(detail);
            })
        })
        .catch(error => {
            this.fetching = false;
            console.error(error);
        });
    }
}
export default new RoomStore();