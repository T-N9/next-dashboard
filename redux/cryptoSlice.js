import { createSlice } from "@reduxjs/toolkit";

export const cryptoSlice = createSlice({
    name : 'crypto',
    initialState : {
        name : 'chainlink',
        toggle : false
    },
    reducers : {
        setCryptoName : (state, action) => {
            state.name = (action.payload);
        },

        setOptionToggle : (state) => {
            state.toggle = !state.toggle;
        }
    }

});

export const { setCryptoName, setOptionToggle } = cryptoSlice.actions;
export default cryptoSlice.reducer;