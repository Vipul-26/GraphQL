import { all, fork, call, put, takeEvery } from "redux-saga/effects";
import {
  USER_DETAILS_WITH_POSTS_QUERY,
  UPDATE_PASSENGER_DETAILS_QUERY,
} from "./queries";
import { SetUserDetailsWithPosts, SetUpdatePassengerDetails } from "./actions";
import { USERDETAILSWITHPOSTS, UPDATEPASSENGERDETAILS } from "./types";
import client from "../../ApolloClientProvider";

function* handleUserDetailsWithPosts(action) {
  try {
    const response = yield call(client.query, {
      query: USER_DETAILS_WITH_POSTS_QUERY,
      variables: {
        input: {
          userId: action.payload.userId,
        },
      },
    });
    if (response) {
      yield put(SetUserDetailsWithPosts(response));
    }
  } catch (err) {
    console.log(err);
  }
}

function* handleUpdatePassengerDetails(action) {
  try {
    const response = yield call(client.mutate, {
      mutation: UPDATE_PASSENGER_DETAILS_QUERY,
      variables: {
        input: {
          name: action.payload.name,
          trips: action.payload.trips,
          airline: action.payload.airline,
        },
      },
    });
    if (response) {
      yield put(SetUpdatePassengerDetails(response));
    }
  } catch (err) {
    console.log(err);
  }
}

function* watchUserDetailsWithPosts() {
  yield takeEvery(USERDETAILSWITHPOSTS, handleUserDetailsWithPosts);
}

function* watchUpdatePassengerDetails() {
  yield takeEvery(UPDATEPASSENGERDETAILS, handleUpdatePassengerDetails);
}

function* userDetailSaga() {
  yield all([
    fork(watchUserDetailsWithPosts),
    fork(watchUpdatePassengerDetails),
  ]);
}

export { userDetailSaga as UserDetailSaga };

// set wala reducer me hoga(sagas me api call & then dispatch set action to set data in state)

// normal wala saga me hoga 

// get wala selectors me hoga to get state data
