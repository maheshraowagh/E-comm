
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import AllProducts from './Components/AllProducts/AllProducts'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import toast, {  Toaster } from 'react-hot-toast';
import SingleProductPage from './Pages/SingleProductPage/SingleProductPage'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'



const App = () => {
  const [cartPage,setCartPage] = useState([])

  // Add to CART

  const AddToCart = (products)=>{

    const FindProduct = cartPage.find((findItem)=>findItem.id===products.id)

    if(FindProduct){
      const update = cartPage.map((item)=>(
        item.id===products.id?{...item,quantity:item.quantity+1}:item
      ))
      setCartPage(update)
      toast.success('Item Added Successfully ')
    }else{
      setCartPage([...cartPage,{...products,quantity:1}])
    }
     
    
  }

  // INC QUANTITY
  const handleInc =(id)=>{
   const updateInc = cartPage.map((item)=>(
       item.id===id?{...item,quantity:item.quantity+1}:item
    ))
    setCartPage(updateInc)
  }

  // DEC QUANTITY

  const handleDec = (id)=>{
    const updateDec = cartPage.map((item)=>(
      
      item.id===id && item.quantity>1?{...item,quantity:item.quantity-1}:item
   ))
   setCartPage(updateDec)
  }


  //  HANDLE REMOVE

  const handleRemove=(id)=>{
  const updateItems = cartPage.filter((filterItem)=>(
    filterItem.id!==id
  ))
  setCartPage(updateItems)
  }

  // CALCULATE THE SUM OF PRICE 
   const getTotal = ()=>{
     const totalPrice =cartPage.reduce((total,cartReduce)=>{
      return total + cartReduce.price * cartReduce.quantity
     },0)
     return totalPrice-discount
   }
  // PROMOCODE 

  const [promoApplied, setPromoApplied] = useState(false);

  const applyPromocode = () => {
    if (!promoApplied) {
      if (promoCode === "DISCOUNT10") {
        setDiscount(Math.round(getTotal() * 0.1));
        setPromoCode('');
        setPromoApplied(true); 
        toast.success('Promocode has applied Successfully ')// Set the flag to indicate that the promo code has been applied
      } else {
        toast.error("INVALID PROMOCODE");
      }
    } else {
      toast.error("Promo code has already been applied.");
    }
  };


  const shippingTotal = () => {
    if (cartPage.length > 0) {
      return getTotal() + 50;
    } else {
      return 0; // No shipping cost if the cart is empty
    }
  };


  const [promoCode,setPromoCode] = useState("")
const [discount, setDiscount] = useState(0)


  return (
    <>
    
      
  <BrowserRouter>
   <Navbar cartPage={cartPage}/>
   <Routes>

     <Route path="/" element={<Home/>}/>
     <Route path="/cart" element={<Cart 
       cartPage={cartPage}
       handleDec={handleDec}
       handleInc={handleInc}
       handleRemove={handleRemove}
       getTotal={getTotal}
       applyPromocode={applyPromocode}
       promoCode={promoCode}
       setPromoCode={setPromoCode}
       shippingTotal={shippingTotal}
       />}/>
     <Route path="/AllProducts" element={<AllProducts AddToCart={AddToCart}/>}/>
     <Route path="/Login" element={<Login/>}/>
     <Route path ='/SignUp' element={<SignUp/>}/>
     <Route path ='/SingleProductPage/:id' element={<SingleProductPage AddToCart={AddToCart}/>}/>
     <Route path="/About" element={<About/>}/>
     <Route path="/Contact" element={<Contact/>}/>
    
      </Routes>
      <Toaster/>
      {/* <Footer/> */}
  </BrowserRouter>
    
      </>
  )
}

export default App