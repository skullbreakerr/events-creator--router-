import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditEventPage from '../../../adv-react-router/frontend/src/pages/EditEvent';
import ErrorPage from '../../../adv-react-router/frontend/src/pages/Error';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from '../../../adv-react-router/frontend/src/pages/EventDetail';
import EventsPage, { loader as eventsLoader } from '../../../adv-react-router/frontend/src/pages/Events';
import EventsRootLayout from '../../../adv-react-router/frontend/src/pages/EventsRoot';
import HomePage from '../../../adv-react-router/frontend/src/pages/Home';
import NewEventPage from '../../../adv-react-router/frontend/src/pages/NewEvent';
import RootLayout from '../../../adv-react-router/frontend/src/pages/Root';
import { action as manipulateEventAction } from '../../../adv-react-router/frontend/src/components/EventForm';
import NewsletterPage, { action as newsletterAction } from '../../../adv-react-router/frontend/src/pages/Newsletter';
import AuthenticationPage from './pages/Authentication';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {  
        index: true, 
        element: <HomePage /> 
      },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        path: "user-auth",
        element: <AuthenticationPage />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;