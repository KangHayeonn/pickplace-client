import axios from "axios";
import { setInterceptors } from "./common/interceptors";

const createInstance = () => {
    return axios.create({
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    });
};

const createInstanceWithAuth = () => {
    const instance = axios.create({
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    });
    return setInterceptors(instance);
};

export const instance = createInstance();
export const instanceWithToken = createInstanceWithAuth();