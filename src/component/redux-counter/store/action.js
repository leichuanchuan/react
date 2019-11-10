//按需导出新增的action
import { ADD, Min } from './actiontype'



export const add = (count) => {
    return {
        type: ADD,
        count: count
    }
}

export const mintwo = (count) => {
    return {
        type: Min,
        count: count
    }
}


export const asyncmintwo = count => {
    return dispatch => {
        setTimeout(() => {
            dispatch(mintwo(count))
        },2000)
    }
}

