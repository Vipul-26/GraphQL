import "./App.css";
import {
  getUserDetailswithPosts,
  getPassengerDetails,
} from "./store/myUser/selectors";
import {
  UserDetailsWithPosts,
  UpdatePassengerDetails,
} from "./store/myUser/actions";
import { connect } from "react-redux";

const App = ({
  userDetails,
  passengerDetails,
  userDetailsWithPosts,
  updatePassengerDetails,
}) => {
  return (
    <div>
      <button onClick={() => userDetailsWithPosts({ userId: 2 })}>
        UserDetailswithPosts
      </button>
      <button
        onClick={() =>
          updatePassengerDetails({
            name: "NewDummyUser",
            trips: 999000,
            airline: 5,
          })
        }
      >
        UpdatePassengerDetails
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userDetails: getUserDetailswithPosts(state.userDetail),
  passengerDetails: getPassengerDetails(state.userDetail),
});

const mapDispatchToProps = (dispatch) => ({
  userDetailsWithPosts: (userId) => dispatch(UserDetailsWithPosts(userId)),
  updatePassengerDetails: (passengerDetails) =>
    dispatch(UpdatePassengerDetails(passengerDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
