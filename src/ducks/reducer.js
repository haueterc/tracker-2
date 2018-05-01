// organize reducer by data
import axios from 'axios';

const initialState = {
    user: {},
    handle: {}
}

const GET_USER_INFO = 'GET_USER_INFO';
const GET_HANDLE = 'GET_HANDLE';

export function getUser() {
    let userData = axios.get('/auth/me').then( res => {
        return res.data;
    })
    return {
        type: 'GET_USER_INFO',
        payload: userData
    }
}

export function getHandle( handle ) {
    let handleData = axios.post(`/search`, { handle })
        .then( res => {
        console.log(res);
        return res.data;
    }).catch(function (error) {
        console.log(error);
      });
    return {
        type: 'GET_HANDLE',
        payload: handleData
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
        case GET_HANDLE:
            console.log(action.payload)
            return Object.assign({}, state, {handle: action.payload})     
        default:
            return state;
    }
}

