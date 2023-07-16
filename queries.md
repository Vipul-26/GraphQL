# GraphQL with React & Apollo:-

<https://countries.trevorblades.com/> <https://rickandmortyapi.com/graphql>

client:-

npx create-react-app myapp

npm install @apollo/client graphql

npm start

server:-

npm init --yes && npm pkg set type="module"

npm install @apollo/server graphql

Query:-

Without input GET:-

query {
  getUsersDetails {
    name
    username
    email
  }
}

With input GET:-

query($input: UserDetailsInput) {
  getUserDetailsById(input: $input) {
    name
  }
}

variables:-
{
  "input": {
    "userId": 2
  }
}

With input POST:-

mutation Mutation($input: PassengerDetailsInput) {
  updatePassengerDetails(input: $input) {
    _id
    name
    trips
    airline {
      country
      id
      established
      name
      website
    }
  }
}

variables:-

{
  "input": {
    "name": "NewDummyUser",
    "trips": 999000,
    "airline": 5
  }
}

Multiple Api Calls:-

query ($input: UserDetailsInput) {
  getUserDatawithPosts(input: $input) {
    userData {
      id
      name
      email
    }
    posts {
      id
      title
      body
    }
  }
}

variables:-

{
  "input": {
    "userId": 2
  }
}
