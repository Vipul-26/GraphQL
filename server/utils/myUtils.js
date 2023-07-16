import _ from "lodash";

export const myUtilsFunctionToReturnUsersData = (response) => {
  const filteredUsers = response.map(
    (user) => (_.pick(user), ["name", "username", "email"])
  );
  return filteredUsers;
};

export const myUtilsFunctionToReturnUserDataById = (response, userId) => {
  const userById = _.filter(response, { id: userId });
  const filteredUser = _.pick(userById[0], ["name", "username", "email"]);
  return filteredUser;
};
