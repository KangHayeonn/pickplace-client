// import { instance } from "../index";
//const prefix = "/api/v1";

const Sample = {
    async getSampleData() {
        try {
            // const url = `${prefix}/sample`;
            // const result = await instance.get(url);
            const result = {
                success: true,
                code: 200,
                data: sampleData
            }
            return result;
        } catch(error) {
            return Promise.reject(error);
        }
    },
};

export default Sample;

const sampleData = {
    name: "hayeon",
    language: "typescript"
}