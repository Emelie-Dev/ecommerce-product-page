import React, { useEffect, useState } from 'react'
import Thumbnail from './Thumbnail'
import ProductImage from './ProductImage'
import styles from './ImageGallery.module.css'
import { ImageNavContext, LoadImageContext } from '../../Contexts'

const ThumbnailGallery = () => {

  const [ currentImg, setCurrentImg ] = useState(1);

  const [ loading, setLoading ] = useState(true);

  const images = [

    'src/assets/images/image-product-1.jpg',
    'src/assets/images/image-product-2.jpg',
    'src/assets/images/image-product-3.jpg',
    'src/assets/images/image-product-4.jpg'

  ]

 

  return (

    <section className={styles.gallery}>

      <ImageNavContext.Provider value={[currentImg, setCurrentImg]}>

      <LoadImageContext.Provider value={[loading, setLoading]}>

        <ProductImage src={images[currentImg - 1]} />

        <Thumbnail  />

        </LoadImageContext.Provider>
        </ImageNavContext.Provider>

    </section>
  )
}

export default ThumbnailGallery
