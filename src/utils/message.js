import { Message } from "element-ui";
export function message(...prop) {
    console.log(...prop)
    const res = Object.assign({}, { duration: 3000 }, ...prop)
    return Message(res)
}
