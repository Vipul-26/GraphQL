import { SETUSERDETAILSWITHPOSTS, SETUPDATEPASSENGERDETAILS } from "./types";

const initialState = {
  userDetailsWithPosts: [],
  passengerDetails: [],
};

export const UserDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETUSERDETAILSWITHPOSTS: {
      return {
        ...state,
        userDetailsWithPosts: action.payload,
      };
    }
    case SETUPDATEPASSENGERDETAILS: {
      return {
        ...state,
        passengerDetails: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
