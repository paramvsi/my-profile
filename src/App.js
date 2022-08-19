import './App.css';
import { InterestList } from './data/Interests-data';
import { SkillsList } from './data/Skills-data';
import Interest from './interest/Interest';
import Profile from './profile/Profile';
import Skills from './skills/Skills';

function App() {
  return (
    <div className="App">
      <Profile name="Paramveer" />
      <Skills skills={SkillsList} />
      <Interest interests={InterestList}></Interest>
    </div>
  );
}

export default App;
