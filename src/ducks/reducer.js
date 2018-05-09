import axios from 'axios';

const initialState = {
    user: {},
    searchAttempt: false,
    handles: [],
    handle: '',
    activeList: {},
    list: [],
    toggle: false,
    platform: 'twitter',
    fakeimg: 'https://pbs.twimg.com/profile_images/891793172124246017/YjLHpbjQ_normal.jpg',
    tweet: {}
}

const GET_USER = 'GET_USER';
const GET_HANDLE = 'GET_HANDLE';
const SET_PLATFORM = 'SET_PLATFORM';
const UPDATE_TOGGLE = 'UPDATE_TOGGLE';
const UPDATE_HANDLE = 'UPDATE_HANDLE';
const CREATE_LIST = 'CREATE_LIST';
const ADD_TO_LIST = 'ADD_TO_LIST';
const GET_TWEET = 'GET_TWEET';

export function getUser() {
    let userData = axios.get('/auth/me', console.log('reducer.getUser>SENT'))
        .then(res => {
            console.log('reducer.getUser>RECIEVED>', res.data);
            return res.data})
        .catch(err => {console.log('reducer.getUser', err)})
    return {
        type: GET_USER,
        payload: userData
    }
}

export function getHandle(handle) {
    let handlesData = axios.put('/handle', {data:{handle:handle}})
        .then(res => {console.log("res.data-----", res.data)
            return res.data})
        .catch(err => {console.log('reducer/getHandle/axios.put(/handle): -->>', err)});
    return {
        type: GET_HANDLE,
        payload: handlesData
    }
}

export function setPlatform(platform) {
    let handlesData = platform;
    console.log('reducer.setPlatform>', handlesData)
    return {
        type: SET_PLATFORM,
        payload: handlesData
    }
}

export function updateToggle(toggle) {
    let handlesData = toggle;
    console.log('reducer.updateToggle>', handlesData)
    return {
        type: UPDATE_TOGGLE,
        payload: handlesData
    }
}

export function updateHandle(handle) {
    let handlesData = handle;
    console.log('reducer.updateToggle>', handlesData)
    return {
        type: UPDATE_HANDLE,
        payload: handlesData
    }
}

export function createList(activeList) {
    let handlesData = activeList;
    console.log('reducer.createList>', handlesData)
    return {
        type: CREATE_LIST,
        payload: handlesData
    }
}

export function addToList(list) {
    let handlesData = axios.put('/list', {data:{list:list}})
        .then(res => {console.log("res.data-----", res.data)
            return res.data})
        .catch(err => {console.log('reducer/addToList/axios.put(/list): -->>', err)});
    return {
        type: ADD_TO_LIST,
        payload: handlesData
    }
}

export function getTweet(handle) {
    let handlesData = axios.get(`/twitter?ID=${handle}`)
        .then(res => {console.log('controller.getTweet>', res.data)
            return res.data})
        .catch(err => {console.log('reducer/addToList/axios.put(/list): -->>', err)});
    return {
        type: GET_TWEET,
        payload: handlesData
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case GET_USER + '_FULFILLED':
            console.log(action.payload)
            return Object.assign({}, state, {user: action.payload})

        case GET_HANDLE + '_FULFILLED':
            console.log(action.payload)
            return Object.assign({}, state, {handles: action.payload})

        case SET_PLATFORM :
            console.log('reducer.SET_PLATFORM>', action.payload);
            return Object.assign({}, state, {platform: action.payload})

        case UPDATE_TOGGLE :
            console.log('reducer.UPDATE_TOOGLE>', action.payload);
            return Object.assign({}, state, {toggle: action.payload})

        case UPDATE_HANDLE :
            console.log('reducer.UPDATE_HANDLE>', action.payload);
            return Object.assign({}, state, {handle: action.payload})

        case CREATE_LIST:
            console.log('reducer.CREATE_LIST>', action.payload)
            return Object.assign({}, state, {activeList: action.payload})

        case ADD_TO_LIST + '_FULFILLED':
            console.log(action.payload)
            return Object.assign({}, state, {list: action.payload});

        case GET_TWEET + '_FULFILLED':
            console.log(action.payload)
            return Object.assign({}, state, {tweet: action.payload});


        
        default:
            return state;
    }
}


