import React from 'react'
import styles from './Thumbnail.module.css'

const Thumbnail = () => {

  const images = [

   'src/assets/images/image-product-1-thumbnail.jpg',
   'src/assets/images/image-product-2-thumbnail.jpg',
   'src/assets/images/image-product-3-thumbnail.jpg',
   'src/assets/images/image-product-4-thumbnail.jpg'

  ]

  return (
    <div className={styles.imageBox}>

      {

        images.map((image, index) => <img key={index} src={image} className={`${styles.img} `} alt={`Thumbnail ${index + 1}`} />)
      }
      
    </div>
  )
}

export default Thumbnail;
