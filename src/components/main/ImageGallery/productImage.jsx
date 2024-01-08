import React, { useContext } from 'react'
import styles from './productImage.module.css'
import { LightboxContext } from '../../Contexts'


const ProductImage = ({src, currentImg}) => {

  const [ showLightbox, setShowLightbox ] = useContext(LightboxContext);

  const clickHandler = e => {

   setShowLightbox({value: true, src:`${e.target.src}`, index: currentImg})

  }

  return (
  
    <img className={styles.img} src={src} alt={`Product-image ${currentImg}`} onClick={clickHandler} />
 
  )
}

export default ProductImage
