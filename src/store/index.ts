import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "../feature/Login/userSlice";

function* rootSaga() {}

const rootReducer = combineReducers({
  userReducer
});

function createStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [sagaMiddleware]
  });
  //   sagaMiddleware.run(rootSaga);
  return store;
}

export type RootState = ReturnType<typeof rootReducer>;
export default createStore;
