const { configureStore } = require("@reduxjs/toolkit");
const userReducer = require("./userSlice");

const appStore = configureStore({
    reducer: {
       user: userReducer
    },
});

export default appStore