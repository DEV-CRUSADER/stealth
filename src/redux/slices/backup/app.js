import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";


const initalState = {
  sidebar: {
    open: false,
    type: "CONTACT", // CONTACT, STARRED, SHARED
  },
  isLoggedIn: true,
  tab: 0, // [0, 1, 2, 3]
  snackbar: {
    open: null,
    severity: null,
    message: null,
  },
  users: [], // all users of app who are not friends and not requested yet
  all_users: [],
  friends: [], // all friends
  friendRequests: [], // all friend requests
  chat_type: null,
  room_id: null,
  call_logs: [],
};

const appSlice = createSlice({
  name: "app",
  initialState: initalState, 
  reducers: {
    toggleSidebar: (state, action) => {
      state.sidebar.open = !state.sidebar.open;
    },
    upadteSidebarType: (state, action) => {
      state.sidebar.type = action.payload.type;
    },
    openSnackBar(state, action) {
      console.log(action.payload);
      state.snackbar.open = true;
      state.snackbar.severity = action.payload.severity;
      state.snackbar.message = action.payload.message;
    },
    closeSnackBar(state) {
      console.log("This is getting executed");
      state.snackbar.open = false;
      state.snackbar.message = null;
    },
  },
});

export default appSlice.reducer;

export function ToggleSidebar() {

  const type = "CONTACT";

  return async () => {
    dispatch(appSlice.actions.toggleSidebar());
    dispatch(appSlice.actions.upadteSidebarType({ type }));
  };
}

export function UpdateSidebar(type) {
  return async () => {
    dispatch(appSlice.actions.upadteSidebarType({ type }));
  };
}


export const closeSnackBar = () => async (dispatch, getState) => {
  dispatch(appSlice.actions.closeSnackBar());
};

export const showSnackbar =
  ({ severity, message }) =>
  async (dispatch, getState) => {
    dispatch(
      appSlice.actions.openSnackBar({
        message,
        severity,
      })
    );

    setTimeout(() => {
      dispatch(appSlice.actions.closeSnackBar());
    }, 4000);
  };
