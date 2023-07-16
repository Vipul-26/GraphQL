import {
  myUtilsFunctionToReturnUsersData,
  myUtilsFunctionToReturnUserDataById,
} from "../utils/myUtils";
import fetch from "node-fetch";

class MyModal {
  // here we define base URL with few more variable which we are going to use in this file
  constructor() {}

  // here we define different asynchronus methods & call the api & return response

  async getUsersDetails() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    // 1. simply return the data return data;
    // 2. return only speccific data(by modifying it) with the help of utils function defined in utils folder (Overfetching)
    return myUtilsFunctionToReturnUsersData(data);
  }

  async getUserDetailsById(input) {
    // modify the data on the basis of input
    const { userId } = input;
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return myUtilsFunctionToReturnUserDataById(data, userId);
  }

  async updatePassengerDetails(input) {
    const { name, trips, airline } = input;
    // POST api call

    const res = await fetch("https://api.instantwebtools.net/v1/passenger", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        trips: trips,
        airline: airline,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await res.json();
    return json;
  }

  async getUserDatawithPosts(input) {
    const { userId } = input;

    // multiple api calls

    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    const userData = await userResponse.json();

    const postsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts`
    );

    const postsData = await postsResponse.json();

    const userSpecificPostData = postsData.filter(
      (data) => data.userId == userId
    );

    return { userData, posts: userSpecificPostData };
  }
}

export default new MyModal();
