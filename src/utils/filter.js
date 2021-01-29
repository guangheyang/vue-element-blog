/*
* format
* */
import moment from 'moment'
export function timeHandle(value, type) {
    if (value === '') return;
    return moment(value).format(type);
}
