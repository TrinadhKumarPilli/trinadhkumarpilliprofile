import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import rootReducer from "./rootReducer";

export default function ConfigStore(){
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return store;
}