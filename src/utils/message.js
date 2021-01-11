import { Message } from "element-ui";
export function message(...prop) {
    return Message({
        duration: 3000,
        ...prop
    })
}
