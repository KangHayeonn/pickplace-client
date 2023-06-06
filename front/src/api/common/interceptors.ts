export const setInterceptors = (instance:any) => {
    instance.interceptors.request.use(
        (config:any) => {
            const token ="";
            
            if(token) {
                config.headers["Authorization"] = `Bearer ${token}`;
            }

            return config;
        },
        (error:any) => {
            return Promise.reject(error);
        },
    );
    instance.interceptors.response.use(
        (response:any) => {
            return response;
        },
        (error:any) => {
            return Promise.reject(error);
        },
    );

    return instance;
}