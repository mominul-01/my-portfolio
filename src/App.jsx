
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Skill from './components/Skill'
import SocialLink from './components/SocialLink'

function App() {


  return (
    <div>
      <Navbar/>
      <Home />
      <SocialLink />
      <About />
      <Skill/>
      <Portfolio />
      <Experience />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
