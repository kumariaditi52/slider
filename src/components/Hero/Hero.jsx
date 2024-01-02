import React from 'react'
import css from './Hero.module.css'
import Heroimg from '../../assets/hero.png'
import { RiShoppingBagFill } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'

const Hero = () => {
    return (
        <div className={css.container}>

            {/* left side */}
            <div className={css.h_sides}>
                <span className={css.text1}>skin protection cream</span>

                <div className={css.text2}>
                    <span>Trendy protection cream</span>
                    <span>
                        {" "}
                        sedilt say sutable disposal and boy . Exercise joy man children rejaiiced
                    </span>
                </div>
                </div>

                {/* middle hero */}

                <div className={css.wrapper}>
                    <div className={css.blueCircle}></div>
                    <img src={Heroimg} alt='' width={600} />
                    <div className={css.cart2}>
                        <RiShoppingBagFill />

                        <div className={css.signup}>
                            <span>Best Signup offers</span>
                            <div>
                                <BsArrowRight />
                            </div>
                        </div>
                    </div>
                </div>

                {/* right side */}

                <div className={css.h_sides}>
                    <div className={css.traffic}>
                        <span>1.5m</span>
                        <span>Monthly Traffic</span>
                    </div>

                    <div className={css.customers}>
                        <span>100k</span>
                        <span>Happy Customers</span>
                    </div>
                </div>

            
        </div>
    )
}

export default Hero