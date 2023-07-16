# GraphQL

cd client

npm start

cd server

npm start

Use Cases of GraphQL:-

Saving Bandwidth (Overfetching)

Consider the example of a blog home page. It displays the list of all blog posts (just the title and URLs). However, to display this list, you need to fetch all the blog posts (along with body data, images, etc.) through the API, and then show only what is required, usually through UI code. This impacts the performance of your app and consumes more data, which is expensive for the user.

Retriving Nested Data (Underfetching)

Example 1:-

<https://www.youtube.com/watch?v=bagL7Kbc1yg>

/user/:userId to get a particular user data
/posts to get all posts data

We write a query to get all the psost associated with a user

Example 2:- one to many relationship

/authors to get list of all the authors(id, name, ...)
/authors/:id/books to get all books(id, name, genre, price) of a particular author

In Rest first we call /authors to get list of all the authors & then call /authors/:id/books to get list of all the books by passing author id

Example 3:-

<https://medium.com/p/529bc2d419c5>

Retrieving data from multiple sources

Schema Types:-

<https://tanishqbhardwaj-tb.medium.com/graphql-schema-and-types-part-2-907dba5061de>
