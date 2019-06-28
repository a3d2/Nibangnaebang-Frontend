import { observable, action } from "mobx";
import faker from 'faker';
import { BASE_URI, IMAGE_URI } from "../constants/const";
import { getBody, tuneObjectWithKey } from "../utils/utils";

class RoomStore {
    @observable rooms = {
        
    };

    @action
    createRoom = async (room, images) => {
        return fetch(`${BASE_URI}`, {
            method: 'POST',
            body:getBody({
                query:"Create",
                room:room
            })
        })
        .then(res => res.json())
        .then(({ code, RoomNo }) => {
            if(RoomNo) {
                this.rooms[RoomNo] = room;
                
                images.forEach(each => {
                    this.uploadImage(each, RoomNo);
                })
            }
            return new Promise((resolve, _) => {
                resolve(RoomNo);
            })
        })
        .catch(error => {
            this.fetching = false;
            console.error(error);
        });
    }

    @action
    uploadImage = (image, roomNo) => { 
        return fetch(`${BASE_URI}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body:getBody({
                query:"uploadRoomImg",
                roomNo:roomNo
            }, image)
        })
        .then(res => res.json())
        .then((success) => {
            console.log("TCL: success", success)

            return new Promise((resolve, _) => {
                resolve();
            })
        })
        .catch(error => {
            this.fetching = false;
            console.error(error);
        });
    }

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
                this.rooms = { ...this.rooms, ...tuned };
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
            detail.images= detail.images.map(each => {
                return `${IMAGE_URI}/${each.Dir}`
            })
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

    @action
    search = async (searchKey, opt) => {
        return fetch(`${BASE_URI}`, {
            method: 'POST',
            body:getBody({
                query:"searchFilter",
                searchKey:searchKey,
                opt:opt
            })
        })
        .then(res => res.json())
        .then((result) => {
            return new Promise((resolve, _) => {
                resolve(result);
            })
        })
        .catch(error => {
            this.fetching = false;
            console.error(error);
        });
    }
}
export default new RoomStore();