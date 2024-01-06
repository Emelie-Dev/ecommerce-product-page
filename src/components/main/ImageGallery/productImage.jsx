import React from 'react'
import styles from './productImage.module.css'

const ProductImage = ({src}) => {

  return (
  
    <img className={styles.img} src={src} alt='Product-image 1'/>
 
  )
}

export default ProductImage
