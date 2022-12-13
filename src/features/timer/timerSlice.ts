import { createSlice } from "@reduxjs/toolkit";

export interface TimerState {
    time: {
        minutes: string | number
        seconds: string | number
    }
    changeUser: {
        position: number
    }
};

const initialState: TimerState = {
    time: {
        minutes: "00",
        seconds: "60",
    },
    changeUser: {
        position: 0
    }

};

export const timerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        timerRun(state) {
            let date = new Date();
            state.time.seconds = Math.abs(date.getSeconds() - 60);
            state.time.minutes = date.getMinutes() % 2 === 0 ? 0 : 1;
        },
        changeUser(state, action) {
            if (action.payload.minutes === 1 && action.payload.seconds === 60) {
                state.changeUser.position += 0.5

            }
            
        }
    }
});

export const { timerRun, changeUser } = timerSlice.actions;

export default timerSlice.reducer;