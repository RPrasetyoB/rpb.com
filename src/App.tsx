import { ThemeProvider } from '@mui/material'
import './App.css'
import { Navbar } from './component'
import { About, Home, Resume } from './containers'
import theme from './Theme'

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Home />
        <About />        
        <Resume />
      </ThemeProvider>
    </>
  )
}

export default App
