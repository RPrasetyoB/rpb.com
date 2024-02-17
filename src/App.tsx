import { ThemeProvider } from '@mui/material';
import './App.css';
import theme from './Theme';
import MainPage from './pages';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path='/*' element={<MainPage />}/>          
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
