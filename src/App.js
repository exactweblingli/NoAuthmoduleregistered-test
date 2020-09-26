import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { API, graphqlOperation } from "aws-amplify";
import { listTodos } from "./graphql/queries";
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

function App() {
  const [todos, setTodos] = React.useState('')

  React.useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const postData = await API.graphql({ query: listTodos });
    setTodos(postData.data.listTodos.items)
    console.log(postData)
  }

  return (
    <div className="App">
      <Fragment>
        {todos && todos.map(todo => (
          <span> 
            <h5>{todo.name}</h5>
            {todo.id}
            {todo.description}
            {todo.createAt}
          </span>
        ))}
      </Fragment>
    </div>
  );
}

export default App
