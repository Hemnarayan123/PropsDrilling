import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import ProductDetails from './ProductDetails';

function App() {

  const products = [
    {
      id:1,
      image:
        "https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256261_640.jpg",
      name: " Apple",
      price: "120000",
      rating: 5,
    },

    {
      id:2,
      image:
        "https://cdn.pixabay.com/photo/2020/11/05/10/39/smartphone-5714763_640.jpg",
      name: "Redmi",
      price: "20000",
      rating: 4,
    },

    {
      id:3,
      image:
        "https://media.istockphoto.com/id/1284378353/photo/young-indian-farmer-using-smartphone-in-cotton-field.jpg?s=2048x2048&w=is&k=20&c=PAsTawGLMowiyu_p6EaZzlnfS4QegF5C51MluvSPRKA=",
      name: "Vivo",
      price: "3000",
      rating: 3,
    },
    {
      id:4,
      image:
        "https://media.istockphoto.com/id/1284378353/photo/young-indian-farmer-using-smartphone-in-cotton-field.jpg?s=2048x2048&w=is&k=20&c=PAsTawGLMowiyu_p6EaZzlnfS4QegF5C51MluvSPRKA=",
      name: "Nokia",
      price: "30000",
      rating: 3.9,
    },
  ];

  return (
    <>
    <BrowserRouter>

    <Routes>

      <Route path='/' element={<Home products={products}/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      {/* <Route path='productDetails' element={<ProductDetails/>}></Route> */}
      <Route path="/productDetails/:productId" element={<ProductDetails products={products} />} />



    </Routes>
    
    
    </BrowserRouter>
    
    </>
  )
}

export default App
