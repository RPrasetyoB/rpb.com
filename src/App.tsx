import { ThemeProvider } from '@mui/material';
import './App.css';
import theme from './Theme';
import MainPage from './pages';

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
    </>
  )
}

export default App
