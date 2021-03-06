import {combineReducers} from "redux";
import thunk from "redux-thunk";
import {loginSlice} from "./reducers/login-reducer";
import {newPasswordSlice} from "./reducers/newPassword-reducer";
import {registerSlice} from "./reducers/register-reducer";
import {restorePasswordSlice} from "./reducers/restorePassword-reducer";
import {appSlice} from "./reducers/app-reducer";
import {packsSlice} from "./reducers/packs-reducer";
import {cardsSlice} from "./reducers/cards-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {practiceSlice} from "./reducers/practice-reducer";


export const rootReducer = combineReducers({
    login: loginSlice.reducer,
    register: registerSlice.reducer,
    restorePassword: restorePasswordSlice.reducer,
    newPassword: newPasswordSlice.reducer,
    packs: packsSlice.reducer,
    cards: cardsSlice.reducer,
    app: appSlice.reducer,
    practice: practiceSlice.reducer
})


export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
