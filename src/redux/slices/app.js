import { createSlice } from "@reduxjs/toolkit";


const initState = {
  sidebar: {
    open: false,
    type: "CONTACT"
  }
}

const appSlice = createSlice({
  name: "app",
  initialState: initState,
  reducers: {
    toggleSidebar: (state, action) => {
      state.sidebar.open = !state.sidebar.open;
    },
    upadteSidebarType: (state, action) => {
      state.sidebar.type = action.payload.type;
    }
  }
});

export default appSlice.reducer;