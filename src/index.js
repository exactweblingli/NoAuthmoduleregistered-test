import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient, { gql } from 'apollo-boost'

// const client = new ApolloClient({
//   uri: 'http://192.168.100.109:20002'
// })

// client
//   .query({
//     query: gql`
//       query ListTodos(
//         $filter: ModelTodoFilterInput
//         $limit: Int
//         $nextToken: String
//       ) {
//         listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
//           items {
//             id
//             name
//             description
//             createdAt
//             updatedAt
//           }
//           nextToken
//         }
//       }
//     `
// })
// .then(data => console.log(data))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
