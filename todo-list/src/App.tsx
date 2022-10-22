import { CreateTaskBar } from './components/CreateTaskBar';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

import './styles/global.scss';

function App() {
  return (
    <>
      <Header />

      <CreateTaskBar />

      <Tasks />
    </>
  )     
}

export default App
