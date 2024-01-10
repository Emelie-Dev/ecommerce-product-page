import React, { useState } from 'react'
import Thumbnail from './Thumbnail'
import ProductImage from './productImage'
import styles from './imageGallery.module.css'
import { ImageNavContext } from '../../Contexts'

const ThumbnailGallery = () => {

  const [ currentImg, setCurrentImg ] = useState(1);


  const images = [

    'src/assets/images/image-product-1.jpg',
    'src/assets/images/image-product-2.jpg',
    'src/assets/images/image-product-3.jpg',
    'src/assets/images/image-product-4.jpg'

  ]

  return (

    <section className={styles.gallery}>

      <ImageNavContext.Provider value={[currentImg, setCurrentImg]}>

        <ProductImage src={images[currentImg - 1]} />

        <Thumbnail />
     
        </ImageNavContext.Provider>

    </section>
  )
}

export default ThumbnailGallery
