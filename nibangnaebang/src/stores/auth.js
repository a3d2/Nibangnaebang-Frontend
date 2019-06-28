import { observable, action } from "mobx";
import faker from 'faker';
import { BASE_URI } from "../constants/const";
import { getBody, showAlert, urlToBlob } from "../utils/utils";
import { AsyncStorage, DeviceEventEmitter } from 'react-native';

class AuthStore {
    @observable user = {

    }

    @action
    tour = () => {
        this.user = {
            UserNo:'tourist'
        }
    }

    @action
    login = async (id, pw) => {
    console.log("TCL: AuthStore -> login -> id, pw", id, pw)
        
        return fetch(`${BASE_URI}`, {
            method: 'POST',
            body:getBody({
                query:"Login",
                id:id,
                pwd:pw
            })
        })
        .then(res => res.json())
        .then((user) => {
            console.log("TCL: AuthStore -> user", user)
            if(user.IsExistUser) {
                this.user = user;

                AsyncStorage.setItem('id', id);
                AsyncStorage.setItem('pw', pw);
            } else {
                showAlert('없는 사용자에요')
                AsyncStorage.removeItem('id');
                AsyncStorage.removeItem('pw');
            }
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
    register = async (id, pw, gender, school, image) => {    
        return fetch(`${BASE_URI}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body:getBody({
                query:"SignUp",
                user:{
                    id:id,
                    pwd:pw,
                    gender:gender,
                    school:school,
                    token:'t'
                }
            }, image)
        })
        .then(res => res.json())
        .then((user) => {
            if(user.ResMsg === "Success") {
                user.UserNo = user.No;

                AsyncStorage.setItem('id', id);
                AsyncStorage.setItem('pw', pw);

            }

            return new Promise((resolve, _) => {
                resolve(user.ResMsg  === "Success" ? user : false);
            })
        })
        .catch(error => {
            this.fetching = false;
            console.error(error);
        });
    }

    @action
    registerComplete = (user) => {
        this.user = user;
        DeviceEventEmitter.emit('registerComplete');
    }


    @action
    logout = () => {
        this.user = {}
        AsyncStorage.removeItem('id');
        AsyncStorage.removeItem('pw');
    }
}
export default new AuthStore();