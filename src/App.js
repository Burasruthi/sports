
import './App.css';

import Header from './Header/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home/Home';
import Categories from './Categories/Categories';
import Cart from './Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
    
      <Header/>
      <Routes>
        <Route path={'/Home'} element={<Home/>}/>
        <Route path={'/Categories'} element={<Categories/>}/>
        <Route path={'/Cart'} element={<Cart/>}/>
      </Routes>
      </div>
    </BrowserRouter>
      
    
  );
}

export default App;
