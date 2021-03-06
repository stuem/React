import React, { useState } from 'react'
import {
  Box,
  ThemeProvider,
  CSSReset,
  theme
} from '@chakra-ui/core'
// import Todolist from './todolist'
// import ApolloDocs from './Apollodocs'
// import ExchangeRates from './ExchangeRates'
// import UseQue from './useQuery'
import Formik from './Formik'
// import Formis from './Formis'
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from '@apollo/client'
function Index () {
  const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
  })
  console.log(client)
  client.query({
    query: gql`
                query GetRtes {
                    rates(currency: "USD") {
                        currency
                    }
                }`
  }).then(result => console.log(result.data))

  return (
    <Box className='App'>
      <ApolloProvider client={client}>
        <div>
          <h2>My first Apollo app 🚀</h2>
        </div>
        <ThemeProvider theme={theme}>
          <CSSReset />
          <Formik />
          {/* <Formis /> */}
        </ThemeProvider>
        {/* <ExchangeRates /> */}
        {/* <Todolist /> */}
      </ApolloProvider>
    </Box>
  )
}
export default Index
