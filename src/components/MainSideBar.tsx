import { NavLink } from 'react-router-dom'

export const MainSideBar = () => {
  return (
    <section className="sidebar">
      <div className="sidebar__logo">Dotify.</div>
      <nav className="navbar">
        <div className="navbar__links">
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/search'}>Search</NavLink>
          <NavLink to={'/collection'}>Your Library</NavLink>
        </div>
        <div className="navbar__actions">
          <NavLink to={'/'}>Create PLaylist</NavLink>
          <NavLink to={'/'}>Liked Songs</NavLink>
        </div>
      </nav>

      <div className="sidebar__playlists">
        <NavLink to={'/playlist/' + 101}>Playlist #1</NavLink>
      </div>
    </section>
  )
}
