import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import RegistrationPage from './components/RegistrationPage.jsx';
import VerificationPage from './components/VerificationPAge.jsx';
import RoomSelectionPage from './components/RoomSelectionPage.jsx';
import ConfirmationPage from './components/ConfirmationPage.jsx';
import PaymentPage from './components/PaymentPage.jsx';
import SuccessPage from './components/SuccessPage.jsx';
import HomePage from './components/HomePage.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const geneRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'registration',
        element: <RegistrationPage />,
      },
      {
        path: 'identify',
        element: <VerificationPage />,
      },
      {
        path: 'rooms',
        element: <RoomSelectionPage />,
      },
      {
        path: 'rooms/:id',
        element: <ConfirmationPage />,
      },
      {
        path: 'rooms/:id/payment',
        element: <PaymentPage />,
      },
      {
        path: 'rooms/:id/payment/success',
        element: <SuccessPage />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 30000 * 50,
      refetchOnMount: 'always',
      refetchOnReconnect: 'always',
      refetchOnWindowFocus: 'always',
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={geneRouter} />
      <ReactQueryDevtools
        client={queryClient}
        initialIsOpen={false}
        buttonPosition='bottom-right'
      />
    </QueryClientProvider>
  </StrictMode>
);
