import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        // searchQuery: '',
        // suggestions: []
    },
    reducers: {
        cacheResults: (state, action) => {
            // {ip:["iphone","iphone pro"]}
            state = Object.assign(state, action.payload)
        }

    }

})

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;
/*
DATA STRUCTURE
CACHE:
Time complexity to search in array = O(n) - atleast need an iteration to find where it is.
array.indexOf(search)
[]
{
    i:
    ip:
    iph:
} - O(1) - for time complexity
new Map() - very less complexity
*/

//What is LRU Cache?