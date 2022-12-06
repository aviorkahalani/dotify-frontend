import { Outlet } from 'react-router-dom'
import { MainSideBar } from './components/MainSideBar'

function App() {
  return (
    <section className="app">
      <MainSideBar />
      <Outlet />
    </section>
  )
}

export default App
