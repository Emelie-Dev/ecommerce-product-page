import React from 'react'
import Logo from './Logo'
import styles from  './Header.module.css';
import Navigation from './Navigation';


const Header = () => {
  return (
    
    <header className={styles.header}>

      <Logo />

      <Navigation />

    </header>
  )
}

export default Header
