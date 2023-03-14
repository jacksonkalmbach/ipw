import { Route, Routes } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import About from './routes/about/about.component';
import Shop from './routes/shop/shop.component';
import Authentication from './routes/authentication/authentication.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/login' element={<Authentication />}/>
      </Route>
    </Routes>
  );
}

export default App;
