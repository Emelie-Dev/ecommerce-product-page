import React from 'react'
import ImageGallery from './ImageGallery/imageGallery'
import styles from './Main.module.css'
import ImageDetails from './ImageDetails/imageDetails'

const Main = () => {

  return (

    <main className={styles.main}>
      
      <ImageGallery />

      <ImageDetails />

    </main>

  )
}

export default Main
