import { useParams } from 'react-router-dom'

export const Playlist = () => {
  const params = useParams()

  return <div>Playlist {params.playlistId}</div>
}
