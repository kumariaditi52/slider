import React from 'react'
import css from './Header.module.css'
import Logo from '../../assets/logo (1).png'
import {MdCreditCard} from 'react-icons/md'
const Header = () => {
  return (
    <div className={css.container}>
        <div  className={css.logo}>
            <img src={Logo} alt='' />
            <span>Amazon</span>

        </div>

        <div className={css.right}>
            <div className={css.menu}>

           <ul className={css.menu}>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>sales</li>
            <li>ENG</li>
           </ul>
            </div>
       <input type='text' className={css.search} placeholder='search'/>
      <MdCreditCard className={css.cart}/>

        </div>

    </div>
  )
}

export default Header