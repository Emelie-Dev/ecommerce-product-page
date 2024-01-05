import React from 'react'
import styles from './Quantity.module.css'

const Quantity = () => {

  return (

    <div className={styles['quantity-div']}>
      
      <img className={styles.img} src='src\assets\images\icon-minus.svg' alt='Minus-icon'/> 
        <span className={styles.quantity}>0</span>
      <img className={styles.img} src='src\assets\images\icon-plus.svg' alt='Plus-icon' />

    </div>

  )
}

export default Quantity
