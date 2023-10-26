import './App.css'
import { DarkModeProvider} from './context/darkModeContext';
import ComicBrowser from './ComicBrowser';


function App() {
  return (
    <DarkModeProvider>
     <ComicBrowser/>
    </DarkModeProvider>
  )
}

export default App
