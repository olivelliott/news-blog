import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client'
// import { setContext } from '@apollo/client/link/context'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  const httpLink = createHttpLink({
    uri: '/graphql',
  })

  const client = new ApolloClient({
    // link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })


  return (
    <ApolloProvider client={client}>
      <Router>
      </Router>
    </ApolloProvider>
  )
}

export default App;
