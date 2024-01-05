import React from 'react'
import Thumbnail from './Thumbnail'
import ProductImage from './productImage'
import styles from './imageGallery.module.css'

const ThumbnailGallery = () => {

  return (

    <section className={styles.gallery}>

        <ProductImage />

        <Thumbnail />
     

    </section>
  )
}

export default ThumbnailGallery
