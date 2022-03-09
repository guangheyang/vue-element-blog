/*
* format
* */
import moment from 'moment'
function timeHandle(value, type) {
    if (value === '') return;
    return moment(value).format(type);
}

function timeSecond(value) {
    if (value === '') return;
    return timeHandle(value, 'YYYY-MM-DD HH:mm:ss')
}

function timeDay(value) {
    if (value === '') return;
    return timeHandle(value, 'YYYY-MM-DD')
}

export default {
    timeSecond,
    timeDay
}