import { extendObservable } from 'mobx';
/*
*   UserStore
*/
class UserStore {
    isLoggedIn() {
        if (!UserStore.authToken) {
            return false;
        }
        return true;
    }
    
    logout() {
        window.localStorage.removeItem('userdata');
        UserStore.authToken = ""
        UserStore.permissionLevel = 0
    }

    login(permission_level, token){
        UserStore.authToken = token
        UserStore.permissionLevel = permission_level

        let userdata = {
            token: token,
            permission_level: permission_level
        }

        window.localStorage.setItem('userdata', JSON.stringify(userdata));
    }
    
    constructor() {
        let token = '';
        let permission_level = 0;

        const userdata = window.localStorage.getItem('userdata');
        if (userdata !== null) {
            ({token, permission_level} = JSON.parse(userdata));
        }

        UserStore.authToken = token
        UserStore.permissionLevel = permission_level

        extendObservable(this, {
            authToken: token,
            permissionLevel: permission_level
        })
    }
}
export default new UserStore();