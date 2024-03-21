import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            // state.messages.push(action.payload) - adds from the end
            state.messages.splice(10, 1)
            state.messages.unshift(action.payload)  // adss form the start
        }
    }
})

export const { addMessage } = chatSlice.actions
export default chatSlice.reducer