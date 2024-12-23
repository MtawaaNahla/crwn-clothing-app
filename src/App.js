import { Routes, Route } from 'react-router-dom'; 
 
import Home from './routes/home/home.component'; 
import Navigation from './routes/home/navigation/navigation.component'; 
 
import './routes/home/navigation/navigation.styles.scss'; 
import Authentication from './routes/authentication/authentication.component'; 
import Shop from './routes/shop/shop.component'; 
import Checkout from './routes/checkout/checkout.component'; 
 
 
 
const App = () => { 
  return ( 
    <Routes>  
      <Route path='/' element={<Navigation />} > 
      <Route index element={<Home />} /> 
      <Route path='Shop'  element={<Shop />} /> 
      <Route path='auth'  element={<Authentication />} /> 
      <Route path='checkout'  element={<Checkout />} /> 
      </Route> 
    </Routes>  
    ); 
}; 
 
       
export default App;
