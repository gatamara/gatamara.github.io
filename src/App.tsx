import './App.css'
import { Form } from './sections/Form/Form'
import { NavBar } from './components/NavBar/NavBar'
import { Banner } from './sections/banner/Banner'
import { ScreenSkills } from './sections/skills/ScreenSkills'
import { Projects } from './sections/projects/Projects'

function App() {
  return (
    <div className='container'>
      <header>
        <NavBar />
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
