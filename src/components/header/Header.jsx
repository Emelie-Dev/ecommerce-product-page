import React from 'react'
import Logo from './Logo'
import styles from  './Header.module.css';
import Navigation from './Navigation';
import UserPanel from './userPanel';


const Header = () => {
  return (
    
    <header className={styles.header}>

      <Logo />

      <Navigation />

      <UserPanel />


    </header>
  )
}

export default Header
