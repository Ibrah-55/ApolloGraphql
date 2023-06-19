import App from './components/App';
import './styles/index.css'
import { createRoot } from 'react-dom/client';


import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  ssr: false,
  optimizeDeps: {
    include: [
      '@apollo/client/core',
      '@apollo/client/cache',
      'my-module',
      '**/components/**/*.js',
    ],
  },
})

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);