import React, { useContext } from 'react'
import { useState } from 'react'
import { SidebarData } from './SidebarData'
import { Store } from '../chart/CartReducer'
import Header from '../header/Header.js'
import styles from './Navbar.module.css'
import { Link, useHistory } from 'react-router-dom'
import * as GiIcons from 'react-icons/gi'
import * as TiIcons from 'react-icons/ti'
import * as FaIcons from 'react-icons/fa'
import * as BiIcons from 'react-icons/bi'
import Kosik from './kosik'
import { useAuth } from '../Login/RegisterState'
import logo from '../main/logo.jpg'

function Navbar() {
   const { cart } = useContext(Store)
   const { user, logout } = useAuth()
   const history = useHistory()
   const [sidebar, setSidebar] = useState(false)
   const [error, setError] = useState('')
   const showSidebar = () => setSidebar(!sidebar)
   async function handleLogout() {
      setError('')
      try {
         await logout()
         history.push('/')
      } catch {
         setError('nepodařilo se odhlásit')
      }
   }

   return (
      <nav className={styles.items}>
         <h1 className={styles.navbarLogo}>
            <h1 className={styles.header}>
               <Header />
            </h1>
            {/*    <Kosik /> */}
         </h1>

         <div className={styles.menuIcon}>
            <i onClick={showSidebar}>
               {sidebar ? <TiIcons.TiTimes /> : <FaIcons.FaBars />}
            </i>
         </div>
         <ul
            className={
               sidebar
                  ? `${styles.navMenu} ${styles.active} `
                  : `${styles.navMenu}`
            }
         >
            {SidebarData.map((item, index) => (
               <Link
                  key={index}
                  className={styles.navLinks}
                  to={item.url}
                  onClick={showSidebar}
                  style={{ textDecoration: 'none' }}
               >
                  <h4 className={styles.icons}>{item.icon}</h4>
                  {item.title}
               </Link>
            ))}
            {/*  <Link
               className={`${styles.navLinks_mobiles}  ${styles.kosik}`}
               to="/kosik"
            >
               <h4 style={{ color: 'white' }}>
                  <GiIcons.GiShoppingCart />
                  <div className={styles.delka}>
                     {cart.length === 0 ? '' : cart.length}
                  </div>
               </h4>
               Košík
            </Link> */}
            {/* 
               <Link
                  to="prihlasit-se"
                  className={styles.navLinks}
                  style={{ textDecoration: 'none' }}
                  onClick={showSidebar}
               >
                  <h4 className={styles.icons}>
                     <BiIcons.BiLogIn />
                  </h4>
                  {user !== null ? (
                     <div>Odhlásit se</div>
                  ) : (
                     <div>Přihlásit se</div>
                  )}
               </Link>
             */}
         </ul>
      </nav>
   )
}

export default Navbar
