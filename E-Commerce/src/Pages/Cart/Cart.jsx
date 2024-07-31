import { useState } from "react";


const Cart = ({cartPage,handleDec,handleInc,handleRemove,getTotal,applyPromocode,setPromoCode,promoCode,shippingTotal}) => {

const handleOnChange= (e)=>{
  setPromoCode(e.target.value.toUpperCase())
}


  return (
   
      <div className="flex flex-col md:flex-row justify-center p-4 relative h-full">
        <div className="w-full md:w-3/5 bg-white shadow-lg p-6 mb-4 md:mb-0 md:mr-4">
          <div className="[margin-bottom:5vh]">
            <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
            <span className="absolute top-[2vh] right-[35vw] text-2xl font-bold mb-6">
              {cartPage.length} ITEMS
            </span>
          </div>

          <div className="hidden md:flex justify-between text-zinc-600 text-sm uppercase mb-4">
            <h2 className="w-2/5">Product Details</h2>
            <h2 className="w-1/5 text-center">Quantity</h2>
            <h2 className="w-1/5 text-center">Price</h2>
            <h2 className="w-1/5 text-center">Total</h2>
          </div>

          {/* CART SECTION START */}
          {cartPage.map((cartItems) => (

            <div className="border-t border-zinc-200" key={cartItems.id}>
              <div className="flex justify-between items-center p-4 border-b border-zinc-200">
                <div className="flex items-center space-x-4  w-[10vw]">
                  <img
                    src={cartItems.thumbnail}
                    alt="iPhone 9"
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h2 className="font-bold text-md ">{cartItems.title}</h2>
                    <p className="text-sm text-zinc-500">{cartItems.category}</p>
                    <button onClick={()=>handleRemove(cartItems.id)} className="text-red-500 text-sm hover:text-red-600">
                      Remove
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button onClick={()=>handleDec(cartItems.id)} className="bg-zinc-200 text-zinc-600 [margin-left:7vw] px-3 py-1 rounded">
                    -
                  </button>
                  <span>{cartItems.quantity}</span>
                  <button onClick={()=>handleInc(cartItems.id)} className="bg-zinc-200 text-zinc-600 px-3 py-1 rounded">
                    +
                  </button>
                </div>
                <p className="text-lg font-semibold ">{cartItems.price} Rs.</p>
                <div>
                  <p className="text-md text-black-500 font-semibold [margin-right:3vw]">
                    {cartItems.price*cartItems.quantity} Rs.
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* CART SECTION END */}
        </div>

        {/* Order Page */}
        <div className="w-full md:w-1/5 bg-white shadow-lg p-6 h-full">
          <h1 className="text-xl font-bold mb-4 py-5">Order Summary</h1>
          <div className="flex justify-between mb-2">
            <span className='py-5'>Items {cartPage.length}</span>
            <span  className='py-5'>{getTotal()} RS</span>
          </div>
          <div className="flex justify-between mb-4">
            <span  className='py-3'>Shipping</span>
            <select className="border border-zinc-300 p-1">
              <option>Standard shipping - 50.00 RS</option>
            </select>
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Promo Code"
              value={promoCode}
              className="border border-zinc-300 p-2 w-full mb-5 my-5 "
              onChange={handleOnChange}
             
            />
            <button onClick={applyPromocode} className="bg-red-500 text-white w-full p-2 mb-[3vh]">Apply</button>
          </div>
          <div className="flex justify-between font-bold mb-4">
            <span>Total Cost</span>
            <span>{shippingTotal()} RS</span>
          </div>
          <button className="bg-black text-white w-full p-2">Checkout</button>
        </div>
      </div>
   
  );
};

export default Cart;
