import {
  USERDETAILSWITHPOSTS,
  SETUSERDETAILSWITHPOSTS,
  UPDATEPASSENGERDETAILS,
  SETUPDATEPASSENGERDETAILS,
} from "./types";

export const UserDetailsWithPosts = (input) => ({
  type: USERDETAILSWITHPOSTS,
  payload: input,
}); // dispatch from ui

export const SetUserDetailsWithPosts = (input) => ({
  type: SETUSERDETAILSWITHPOSTS,
  payload: input,
}); // dispatch from saga

export const UpdatePassengerDetails = (input) => ({
  type: UPDATEPASSENGERDETAILS,
  payload: input,
});

export const SetUpdatePassengerDetails = (input) => ({
  type: SETUPDATEPASSENGERDETAILS,
  payload: input,
});
