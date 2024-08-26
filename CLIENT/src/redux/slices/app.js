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
  users: [],
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
    updateSidebarType: (state, action) => {
      state.sidebar.type = action.payload.type;
    },
    closeSnackBar(state, action) {
      state.snackbar.open = false;
      state.snackbar.message = null;
      state.snackbar.severity = null;
    },
    openSnackBar(state, action) {
      state.snackbar.open = true;
      state.snackbar.severity = action.payload.severity;
      state.snackbar.message = action.payload.message;
    },
  },
});

export default appSlice.reducer;

function ToggleSidebar() {
  const type = "CONTACT";

  return async () => {
    dispatch(appSlice.actions.toggleSidebar());
    dispatch(appSlice.actions.updateSidebarType({ type }));
  };
}

function UpdateSidebar(type) {
  return async () => {
    dispatch(appSlice.actions.updateSidebarType({ type }));
  };
}

const showSnackbar =
  ({ severity, message }) =>
  async (dispatch, getState) => {
    dispatch(
      appSlice.actions.openSnackBar({
        message,
        severity,
      })
    );

    setTimeout(() => {
      dispatch(CloseSnackBar());
    }, 5000);
  };

const CloseSnackBar = () => {
  return async (dispatch) => {
    dispatch(appSlice.actions.closeSnackBar());
  };
}

export {
  ToggleSidebar,
  UpdateSidebar,
  CloseSnackBar,
  showSnackbar,
}