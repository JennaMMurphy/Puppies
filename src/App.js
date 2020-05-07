import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/client'
import './App.css';
import DogContainer from './container/DogContainer'

//https://github.com/parkerziegler/formidadog-ql

function App() {
  const client = new ApolloClient({
    uri: 'https://formidadog-ql.now.sh'
})
  return (
   
     <ApolloProvider client={client} >
       <main>
        <DogContainer />
       </main>
     </ApolloProvider>

  
  );
}

export default App;
