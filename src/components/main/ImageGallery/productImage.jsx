import React, { useContext } from 'react'
import styles from './productImage.module.css'
import { ImageNavContext, LightboxContext } from '../../Contexts'
import ImageNavArrows from './ImageNavArrows';


const ProductImage = ({src}) => {

  const [ currentImg, setCurrentImg ] = useContext(ImageNavContext);

  const [ showLightbox, setShowLightbox ] = useContext(LightboxContext);

  const clickHandler = e => {

   setShowLightbox({value: true, src:`${e.target.src}`, index: currentImg})

  }

  return (
    
    <figure className={styles.figure}>
    
    <img className={styles.img} src={src} alt={`Product-image ${currentImg}`} onClick={clickHandler} />

    <ImageNavArrows />

    </figure>
 
  )
}

export default ProductImage
