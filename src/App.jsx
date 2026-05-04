import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import AllProjects from './pages/AllProjects/AllProjects'
import ProjectDetail from './pages/ProjectDetail/ProjectDetail'
import Navbar from './components/Navbar/Navbar'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<AllProjects />} />
        <Route path='/projects/:id' element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App