import './App.css'
import { Form } from './sections/Form/Form'
import { NavBar } from './components/NavBar/NavBar'
import { Banner } from './sections/banner/Banner'
import { Proyects } from './sections/proyects/Proyects'
import { ScreenSkills } from './sections/skills/ScreenSkills'

function App() {


  return (
    <div className='container'>
      <header>
        <NavBar />
      </header>
      <section>
        <Banner />
        <ScreenSkills />

        <Proyects />
      </section>
      <Form />



    </div>
  )
}

export default App
