import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { Home } from '../pages/Home'
import { Search } from '../pages/Search'
import { Collection } from '../pages/Collection'
import { Playlist } from '../pages/Playlist'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        index: true,
        element: <Home />,
      },
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: 'collection',
        element: <Collection />,
      },
      {
        path: 'playlist/:playlistId',
        element: <Playlist />,
      },
    ],
  },
])
