import React from 'react'
import styles from './userPanel.module.css';


const UserPanel = () => {

  return (

    <div className={styles.div}>
      
      <img className={styles.cart} src='./src/assets/images/icon-cart.svg' alt='Cart-icon' />

      <img className={styles.avatar} src='./src/assets/images/image-avatar.png' alt='Avatar'/>

    </div>

  )
}

export default UserPanel;
