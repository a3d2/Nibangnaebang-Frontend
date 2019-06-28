import { observable, action } from "mobx";
import faker from 'faker';
import { getBody } from "../utils/utils";
import { BASE_URI } from "../constants/const";

class MessageStore {
    @observable messages = [ ]
    @observable rooms = {
    }

    @action
    loadMessages = async (userNo) => {
        return fetch(`${BASE_URI}`, {
            method: 'POST',
            body:getBody({
                query:"getSummaryMessage",
                nowUser:userNo
            })
        })
        .then(res => res.json())
        .then((messages) => {
            this.messages = messages;

            return new Promise((resolve, _) => {
                resolve(messages);
            })
        })
        .catch(error => {
            this.fetching = false;
            console.error(error);
        });
    }


    @action
    loadMessageDetail = async (roomNo) => {
        return fetch(`${BASE_URI}`, {
            method: 'POST',
            body:getBody({
                query:"getFullMessage",
                roomNo:roomNo
            })
        })
        .then(res => res.json())
        .then((res) => {
            this.rooms[roomNo] = res;

            return new Promise((resolve, _) => {
                resolve(res);
            })
        })
        .catch(error => {
            this.fetching = false;
            console.error(error);
        });
    }

    @action
    sendMessage = async (from, to, message) => {
        return fetch(`${BASE_URI}`, {
            method: 'POST',
            body:getBody({
                query:"acceptRoom",
                sendUser:from,
                receiveUser:to,
                msg:message
            })
        })
        .then(res => res.json())
        .then((res) => {
            console.log("TCL: res", res)

            return new Promise((resolve, _) => {
                resolve(res);
            })
        })
        .catch(error => {
            this.fetching = false;
            console.error(error);
        });
    }
}
export default new MessageStore();