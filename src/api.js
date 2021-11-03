import configs from "./configs";

const endpoint = configs.links.api;
const api = {
    News:{
        index:{
            url: `${endpoint}news`,
            method: 'GET',
        }
    }

}
export default api;
