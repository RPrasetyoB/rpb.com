import './App.css';
import MainPage from './pages';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CustomThemeProvider from './Theme';
import { GlobalState } from './utils';

function App() {

  return (
    <GlobalState>
      <CustomThemeProvider>
        <Router>
          <Routes>
            <Route path='/*' element={<MainPage />}/>          
          </Routes>
        </Router>
      </CustomThemeProvider>
    </GlobalState>
  )
}

export default App
