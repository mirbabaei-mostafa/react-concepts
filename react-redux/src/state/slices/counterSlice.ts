import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  isAction,
} from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decreament: (state) => {
      state.value -= 1;
    },
    increamentByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decreamentByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(increamentAsync.pending, (state) => {
        console.log("Pending...");
      })
      .addCase(
        increamentAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        }
      );
  },
});

export const increamentAsync = createAsyncThunk(
  "counter/increamentAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export const {
  increament,
  decreament,
  increamentByAmount,
  decreamentByAmount,
} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
