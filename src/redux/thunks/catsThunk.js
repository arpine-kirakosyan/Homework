import { createAsyncThunk } from "@reduxjs/toolkit";

const fakeUserApi = async () => {
  return await new Promise(res => {
    setTimeout(() => {
      res({
        name: "Tom",
        url: "https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg"
      });
    }, 1000);
  });
};

export const catsThunk = createAsyncThunk(
  'cats/thunk',
  async () => await fakeUserApi()
);

const catsThunkPending = (state) => {
  state.isLoading = true;
};

const catsThunkFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.name = payload.name;
  state.url = payload.url;
};

const catsThunkRejected = (state) => {
  state.isLoading = false;
};

export const catsThunkExtraReducer = builder => {
  builder
    .addCase(catsThunk.pending, catsThunkPending)
    .addCase(catsThunk.fulfilled, catsThunkFulfilled)
    .addCase(catsThunk.rejected, catsThunkRejected);
};
