import React from 'react';
import About from './components/about/About';
import Team from './components/team/Team';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Work from './components/work/Work';
import Process from './components/process/Process';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';

import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import './App.css';

const functionAppUrl = 'https://apolloexamplesneakers.azurewebsites.net/api/graphql?code=5kem5zHgdiH1piTjxUwj2J5RVLAai7LRCEQw/UWJNRrJ/qHpo4mIKQ==';

const client = new ApolloClient({
  uri: functionAppUrl,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Home></Home>
        <Work></Work>
        <About></About>
        <Team></Team>
        <Services></Services>
        <Process></Process>
        <Skills></Skills>
        <Contact></Contact>
      </ApolloProvider>
    </>
  );
}

export default App;