import axios from 'axios';

const initialState = {
    user: {},
    handle: '',
    handles: []
}

const GET_USER_INFO = 'GET_USER_INFO';
const GET_HANDLE = 'GET_HANDLE';

export function getUser() {
    let userData = axios.get('/auth/me')
        .then(res => {return res.data})
        .catch(err => {console.log('reducer/getUser/axios.get(/auth/me): -->>', err)})
    return {
        type: 'GET_USER_INFO',
        payload: userData
    }
}

export function getHandle(handle) {
    let handlesData = axios.put('/handle', {data:{handle:handle}})
        .then(res => {console.log("res.data-----", res.data)
            return res.data})
        .catch(err => {console.log('reducer/getHandle/axios.put(/handle): -->>', err)});
    return {
        type: 'GET_HANDLE',
        payload: handlesData
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // case GET_USER_INFO + '_PENDING':
        //     break;
        // case GET_USER_INFO + '_REJECTED':
        //     break;
        case GET_USER_INFO + '_FULFILLED':
            console.log(action.payload)
            return Object.assign({}, state, {user: action.payload})
        case GET_HANDLE + '_FULFILLED':
            console.log(action.payload)
            return Object.assign({}, state, {handles: action.payload})     
        default:
            return state;
    }
}

