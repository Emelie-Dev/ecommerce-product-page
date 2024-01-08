import React, { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import styles from './App.module.css'
import { CartContext, CartItemContext, ItemCountContext  } from './components/Contexts';


function App() {
  
const [ showCart, setShowCart ] = useState(false);

const [ cartItemCount, setCartItemCount ] = useState(0);

const [ itemCount, setItemCount ] = useState(0);

  return (

   <div className={showCart ? styles.div : ''}>
 
    <CartContext.Provider value={[showCart, setShowCart]}>
    <CartItemContext.Provider value={[cartItemCount, setCartItemCount]}>

      <ItemCountContext.Provider value={[itemCount, setItemCount]}>

    <Header />

    <Main />

    </ItemCountContext.Provider>
 </CartItemContext.Provider>
 </CartContext.Provider>
    </div>
  )
}

// export { CartContext, CartItemContext, ItemCountContext }
export default App
