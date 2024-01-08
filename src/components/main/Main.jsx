import React, { useContext, useState } from 'react'
import ImageGallery from './ImageGallery/imageGallery'
import styles from './Main.module.css'
import ImageDetails from './ImageDetails/imageDetails'
import Cart from './Cart/Cart'
import Lightbox from './Lightbox/Lightbox'
import { LightboxContext, CartContext } from '../Contexts'



const Main = () => {
  
const [ showLightbox, setShowLightbox ] = useState({value: false, src:'', index: undefined});

const [ showCart, setShowCart ] = useContext(CartContext);


  return (

    <LightboxContext.Provider value={[showLightbox, setShowLightbox]}>

   

    <main className={styles.main}>
      
      <ImageGallery />

    

      <ImageDetails />

    {showCart && <Cart />}

   

    {showLightbox.value && <Lightbox />}

    </main>

    
    </LightboxContext.Provider>

  )
}


export default Main
