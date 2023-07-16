import myModal from "../modals/myModal";

// here we define typeDef & resolvers

// input defines the type of input(payload)

// type defines the type of response it returns

// ! specifies that it is required parameter and rest are optional parameters

// Query defines GET api call while Mutation defines POST/PUT/DELETE api calls

// getUsersDetails(without any response format)

// getUserDetailsById(with response format)

export const typeDef = `
    extend type Query {
        getUsersDetails: [JSON]
        getUserDetailsById(input: UserDetailsInput): MyUserDetails
        getUserDatawithPosts(input: UserDetailsInput): UserDetailswithPosts
    }

    extend type Mutation {
        updatePassengerDetails(input: PassengerDetailsInput): PassengerDetails
    }

    type MyUserDetails {
        name: String
        username: String
        email: String
    }

    type Airline {
        id: Int
        name: String
        country: String
        website: String
        established: String
    }

    type PassengerDetails {
        _id: ID
        name: String
        trips: Int
        airline: [Airline]
    }

    type UserDetailswithPosts {
        userData: UserData
        posts: [Posts]
    }

    type UserData {
        id: Int
        name: String
        email: String
    }

    type Posts {
        id: Int
        title: String
        body: String
    }

    input UserDetailsInput {
        userId: Int!
    }

    input PassengerDetailsInput {
        name: String
        trips: Int
        airline: Int
    }
`;

// While GraphQL queries performs read operations, mutations changes the data.
// A mutation can create, update, or delete objects and fields.
// In REST terminology, queries operate like GET requests, while mutations are similar to POST, PUT, and DELETE.

export const resolvers = {
  Query: {
    getUsersDetails() {
      // without payload
      return myModal.getUsersDetails();
    },
    getUserDetailsById(source, args) {
      // with payload
      return myModal.getUserDetailsById(args.input);
    },
    getUserDatawithPosts(source, args) {
      // with payload
      return myModal.getUserDatawithPosts(args.input);
    },
  },
  Mutation: {
    updatePassengerDetails(source, args) {
      return myModal.updatePassengerDetails(args.input);
    },
  },
};
