import {WorkLocation} from "../types";
import twotwotwo from "./222";
const locations: Map<string, WorkLocation> = {
    "222": twotwotwo,
};



export const locationHandler = (request: any, reply: any): any => {
    if (request.params.location && locations[request.params.location]) {
        reply(locations[request.params.location]);
        return;
    }
    reply("???");
};

export const locationsHandler = (request: any, reply: any): any =>  {
    let arr: string[] = [];
    for (let key in locations) {
        arr.push(key);
    }
    reply(arr);
};;