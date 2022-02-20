import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {QueryClientProvider, QueryClient} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import './index.css';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
  </QueryClientProvider>,
  document.getElementById('root')
);