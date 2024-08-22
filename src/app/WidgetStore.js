import { configureStore } from "@reduxjs/toolkit";
import WidgetReducer from "../context/WidgetSlice";

const store = configureStore({
    reducer: {
        widgets: WidgetReducer
    }
})

export {store}