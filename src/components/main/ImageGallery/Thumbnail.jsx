import React, { useContext } from 'react'
import styles from './Thumbnail.module.css'
import { ImageNavContext } from '../../Contexts';


const images = [

  'src/assets/images/image-product-1-thumbnail.jpg',
  'src/assets/images/image-product-2-thumbnail.jpg',
  'src/assets/images/image-product-3-thumbnail.jpg',
  'src/assets/images/image-product-4-thumbnail.jpg'

 ]

 
const Thumbnail = () => {

  
  const [ currentImg, setCurrentImg ] = useContext(ImageNavContext);

  return (
    <div className={styles.imageBox}>
      
      {

        images.map((image, index) => {   
        
       return (

       <span key={index} className={`${styles.box} ${currentImg === (index + 1) ? styles.currentBox : ''}`}><img  src={image} onClick={() => setCurrentImg(index + 1)} className={`${styles.img} ${currentImg === (index + 1) ? styles.currentImg : ''}`} alt={`Thumbnail ${index + 1}`} /></span>
       
       )
        })

        }
      
      </div>
  )
}

export default Thumbnail;
