import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";

const initalState = {
  sidebar: {
    open: false,
    type: "CONTACT", // CONTACT, STARRED, SHARED
  },
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
