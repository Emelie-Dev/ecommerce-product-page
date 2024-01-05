import React from 'react'
import styles from './Price.module.css'

const Price = () => {

  return (

    <>
    
    <p className={styles.priceTag}>
    <span className={styles.newPrice}>$125.00</span> <span className={styles.discount}>50%</span>
    </p>
   
    <p className={styles.oldPrice}>$250.00</p>

    </>

  )

}

export default Price
