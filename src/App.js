import './App.css';
import { SkillsList } from './data/Skills-data';
import Profile from './profile/Profile';
import Skills from './skills/Skills';

function App() {
  return (
    <div className="App">
      <Profile name="Paramveer" />
      <Skills skills={SkillsList} />
    </div>
  );
}

export default App;
