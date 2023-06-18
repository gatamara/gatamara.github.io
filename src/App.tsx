import './App.css'
import { Form } from './sections/Form/Form'
import { Banner } from './sections/banner/Banner'
import { ScreenSkills } from './sections/skills/ScreenSkills'
import { Projects } from './sections/projects/Projects'
import { NavBar } from './components/NavBar/NavBar'

function App() {
  return (
    <div className='container'>
      <NavBar />
      <header>
      </header>
      <section>
        <Banner />
        <ScreenSkills />
        <Projects />
      </section>
      <Form />
    </div>
  )
}

export default App
