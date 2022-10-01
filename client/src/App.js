import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
// import { setContext } from '@apollo/client/link/context'

import Home from "./pages/Home";

function App() {
  const httpLink = createHttpLink({
    uri: "/graphql",
  });

  const client = new ApolloClient({
    // link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
