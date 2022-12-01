import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { Collection } from '../pages/Collection'

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'collection',
        element: <Collection />,
      },
    ],
  },
])
