import MarkDown from './Components/Markdown/markDown';
import { GlobalProvider } from './GlobalState/globalState';
import './App.css';


function App() {

  return (
    < >
    <h1 className='header'>Real Time Markdown Editor with Live Preview</h1>
    <GlobalProvider>
    <MarkDown />
    </GlobalProvider>
    </>
  );
}

export default App;
