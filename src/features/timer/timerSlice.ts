import { createSlice } from "@reduxjs/toolkit";

export interface TimerState {
    time: {
        minutes: string | number
        seconds: string | number
    }
};

const initialState: TimerState = {
    time: {
        minutes: "00",
        seconds: "60",
    }
};

export const timerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        timerRun(state) {
            const futureData = new Date(2050, 0, 0);
            let nowData = new Date();
            state.time.seconds = 60 - (nowData.getUTCSeconds() - futureData.getUTCSeconds());
            let minutes = (60 - (nowData.getUTCMinutes() - futureData.getUTCMinutes()));

            let computedMinutes = Number(String(minutes).slice(1));

            if (computedMinutes % 2 !== 0) {
                state.time.minutes = 0;
            } else {
                state.time.minutes = 1;
            };
        }
    }
});

export const { timerRun } = timerSlice.actions;

export default timerSlice.reducer;