import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
    updateUsers(state, action) {
      state.users = action.payload.users;
    },
    updateFriends(state, action) {
      state.friends = action.payload.friends;
    },
    updateAllUsers(state, action) {
      state.all_users = action.payload.all_users;
    },
    updateFriendRequests(state, action) {
      state.friendRequests = action.payload.friendRequests;
    },
    selectConversation(state, action) {
      state.chat_type = action.payload.chat_type;
      state.room_id = action.payload.room_id;
    }
  },
});

function ToggleSidebar() {
  const type = "CONTACT";

  return async (dispatch) => {
    dispatch(appSlice.actions.toggleSidebar());
    dispatch(appSlice.actions.updateSidebarType({ type }));
  };
}

function UpdateSidebar(type) {
  return async (dispatch) => {
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
};

const FetchUsers = () => {
  return async (dispatch, getState) => {
    await axios
      .get("/user/v1/get-users", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((response) => {
        dispatch(appSlice.actions.updateUsers({ users: response.data.data }));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const FetchFriends = () => {
  return async (dispatch, getState) => {
    await axios
      .get("/user/v1/get-friendss", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((response) => {
        dispatch(
          appSlice.actions.updateFriends({ friends: response.data.data })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const FetchFriendRequests = () => {
  return async (dispatch, getState) => {
    await axios
      .get("/user/v1/get-friend-requests", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((response) => {
        dispatch(
          appSlice.actions.updateFriendRequests({
            friendRequests: response.data.data,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const SelectConversation = (chat_type, room_id) => {
  return async (dispatch) => {
    dispatch(
      appSlice.actions.selectConversation({
        chat_type,
        room_id,
      })
    );
  };
}

export {
  ToggleSidebar,
  UpdateSidebar,
  CloseSnackBar,
  showSnackbar,
  FetchUsers,
  FetchFriends,
  FetchFriendRequests,
  SelectConversation
};

export default appSlice.reducer;
