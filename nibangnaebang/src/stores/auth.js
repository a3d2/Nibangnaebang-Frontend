import { observable, action } from "mobx";
import faker from 'faker';
import { BASE_URI } from "../constants/const";
import { getBody, showAlert } from "../utils/utils";
import { AsyncStorage } from 'react-native';

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
            if(user.IsExistUser) {
                this.user = user;
                global.userNo = user.UserNo;

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
    register = async (id, pw, school, idCardImg) => {
        console.log("TCL: register -> idCardImg", idCardImg)
        return fetch(`${BASE_URI}`, {
            method: 'POST',
            body:getBody({
                query:"SignUp",
                user:{
                    id:id,
                    pwd:pw,
                    gender:'male',
                    school:school,
                    token:'a',
                    idCardImg:idCardImg,
                }
            })
        })
        .then(res => res.json())
        .then((user) => {
            console.log("TCL: user", user)
            // if(user.IsExistUser) {
            //     this.user = user;
            //     global.userNo = user.UserNo;

            //     AsyncStorage.setItem('id', id);
            //     AsyncStorage.setItem('pw', pw);
            // } else {
            //     showAlert('없는 사용자에요')
            //     AsyncStorage.removeItem('id');
            //     AsyncStorage.removeItem('pw');
            // }
            // return new Promise((resolve, _) => {
            //     resolve();
            // })
        })
        .catch(error => {
            this.fetching = false;
            console.error(error);
        });
    }


    @action
    logout = () => {
        this.user = {}
        AsyncStorage.removeItem('id');
        AsyncStorage.removeItem('pw');
    }
}
export default new AuthStore();