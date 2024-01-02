'use client'

import { ApolloLink, HttpLink, split } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink
} from '@apollo/experimental-nextjs-app-support/ssr'
import { createClient } from 'graphql-ws'

function makeClient() {
  const httpLink = new HttpLink({
    uri: 'https://api.iosconf.sg/v1/graphql'
  })

  const wsLink = new GraphQLWsLink(
    createClient({
      url: 'wss://api.iosconf.sg/v1/graphql'
    })
  )

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      )
    },
    wsLink,
    httpLink
  )

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: splitLink
    // link:
    //   typeof window === "undefined"
    //     ? ApolloLink.from([
    //         new SSRMultipartLink({
    //           stripDefer: true,
    //         }),
    //         httpLink,
    //       ])
    //     : httpLink,
  })
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  )
}
