import AsyncStorage from "@react-native-community/async-storage";
import jwtDecode from "jwt-decode";
import { api } from "./api";

const USER_KEY = "@user"

export const signIn = (user) => {
    AsyncStorage.setItem(USER_KEY, JSON.stringify(user));


    //setando o token como padrão em todas as requisições
    api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
};

export const signOut = () => {
    AsyncStorage.removeItem(USER_KEY);

    api.defaults.headers.common["Authorization"] = undefined;
}

export const getUser = async () => {
    const {student} = JSON.parse(await AsyncStorage.getItem(USER_KEY));

    return student;
}

export const setUser = async (student) => {
    const user = JSON.parse(await AsyncStorage.getItem(USER_KEY));

    user.student = student;

    localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export const isSignedIn = async () => {
    const user = JSON.parse( await AsyncStorage.getItem(USER_KEY));

    

     

    if (user && user.token) {
        const jwtDecoded = jwtDecode(user.token);
        const nowTime = Date.now() / 1000 | 0; // | 0 = retira casas decimais 
        
        if (jwtDecoded < nowTime) return signOut;


        api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
        return true;
    }
    
    return false;
};