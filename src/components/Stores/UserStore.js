import { extendObservable } from 'mobx';
/*
*   UserStore
*/
class UserStore {
    isLoggedIn() {
        if (!UserStore.accessToken) {
            return false;
        }
        return true;
    }
    
    logout() {
        window.localStorage.removeItem('userdata');
        UserStore.accessToken = ""
        UserStore.roles = []
        UserStore.userId = ""
    }

    login(roles, accessToken,userId){
        UserStore.accessToken = accessToken
        UserStore.roles = roles
        UserStore.userId = userId


        let userdata = {
            accessToken: accessToken,
            roles: roles,
            userId:userId
        }

        window.localStorage.setItem('userdata', JSON.stringify(userdata));
    }
    
    constructor() {
        let accessToken = '';
        let roles = [];
        let userId = "";

        const userdata = window.localStorage.getItem('userdata');
        if (userdata !== null) {
            ({accessToken, roles,userId} = JSON.parse(userdata));
        }

        UserStore.accessToken = accessToken
        UserStore.roles = roles
        UserStore.userId = userId

        extendObservable(this, {
            accessToken: accessToken,
            roles: roles,
            userId:userId
        })
    }
}
export default new UserStore();