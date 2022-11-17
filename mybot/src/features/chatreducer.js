import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    messages: [ ],
}

const chatSlice = createSlice({
    name: 'chat',
    initialState ,
    reducers: {
        inputSuccess(state, action){
            state.messages =  [...state.messages, {message:action.payload, type:'user'}]
        }, 
        messageSuccess(state, action){
            state.messages =  [...state.messages, {message:action.payload, type:'bot'}]
        }, 
    }
})

export const { inputSuccess, inputFail, messageSuccess, messageFail } = chatSlice.actions

export default chatSlice.reducer