import React from 'react'
import css from './Footer.module.css'
import logo from '../../assets/logo (1).png'
import { InboxIcon, PhoneIcon, LocationMarkerIcon, LoginIcon, UserIcon, LinkIcon } from '@heroicons/react/outline';
const Footer = () => {
    return (
        <div className={css.cFooterWrapper}>
            <hr />
            <div className={css.cFooter}>
                <div className={css.logo}>
                    <img src={logo} alt="" />
                    <span>amazon</span>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Contact US</span>
                        <span className={css.pngLine}>
                            <LocationMarkerIcon className={css.Icon} />
                            <span>111 north avenue Orlando,={css.Icon}</span>
                        </span>

                        <span className={css.pngLine}>
                            {" "}
                            <PhoneIcon className={css.Icon} />
                            <a href='tel:255-254-7584'>457-875-8759</a>
                        </span>

                        <span className={css.pngLine}>
                            <InboxIcon className={css.Icon} />
                            <a href='maolto:Suppo@Amasom.com'>support@amazon.com</a>
                        </span>
                    </div>
                </div>
                {/* ************************************************************* */}


                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            <LoginIcon className={css.Icon} />
                            Sign In
                        </span>
                    </div>
                </div>
                {/* ************************************************* */}


                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Company</span>
                        <span className={css.pngLine}>
                            <UserIcon className={css.Icon} />
                            <a href='/about'>
                                <p>About us</p>
                            </a>
                        </span>
                    </div>
                </div>

                {/* ********************************************************** */}

                 <div className={css.block}>
                    <div className={css.detail}>
                        <span>Resources</span>
                        <span className={css.pngLine}>
                            <LinkIcon className={css.Icon} />
                            <p>Safety Privancy & Terms</p>

                        </span>
                    </div>
                </div>
            </div> 

{/* ************************************************* */}
            <div className={css.copyRight}>
                <span>Copyright @2022 by amazon. Inc.</span>
                <span>All right reserved</span>
            </div>
        </div>
        // </div>
    );
};

export default Footer