import { Form } from "./sections/Form/Form";
import { Banner } from "./sections/banner/Banner";
import { ScreenSkills } from "./sections/skills/ScreenSkills";
import { Projects } from "./sections/projects-react/Projects";
import { NavBar } from "./components/NavBar/NavBar";
import { ProjectsVue } from "./sections/projects-vue/ProjectVue";

function App() {
  return (
    <div>
      <NavBar />
      <header></header>
      <section>
        <Banner />
        <ScreenSkills />
        <Projects />
        <ProjectsVue />
      </section>
      <Form />
    </div>
  );
}

export default App;
