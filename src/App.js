import { ThemeProvider,createTheme } from '@mui/material';
import GlobalStyle from './GlobalStyle';
import Footer from './components/footer';
import Header from './components/header';
import AddVideo from './pages/addVideo';
import Home from './pages/home';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddCategory from './pages/addCategory';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
});



function App() {
  return (<Router>
    <ThemeProvider theme={darkTheme}>
    <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/nuevo' element={<AddVideo/>}/>
        <Route path='/categoria/:id/*' element={<AddCategory/>}/>
        <Route path='*' element={<div>No se encontro</div>}/>
      </Routes>
      <Footer/>
    </ThemeProvider>
  </Router>
  
    
  );
}

export default App;
