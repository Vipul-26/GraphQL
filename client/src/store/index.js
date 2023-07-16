import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { UserDetailReducer } from "./myUser/reducers";
import { UserDetailSaga } from "./myUser/sagas";

// Defining Root Reducer

const rootReducer = combineReducers({
  userDetail: UserDetailReducer,
});

// Defining Root Saga

function* rootSaga() {
  yield all([UserDetailSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

// Creating Store

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// Integrating Saga Middleware

sagaMiddleware.run(rootSaga);

export default store;
