import { Phonebook } from './Phonebook/Phonebook.jsx';
import s from './App.module.css';

function App() {
  return (
    <div className={s.app}>
      <Phonebook />
    </div>
  );
}

export default App;
