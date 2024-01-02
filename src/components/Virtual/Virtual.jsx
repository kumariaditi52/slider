import React from 'react'
import Shada from '../../assets/shade.png'
import Before from '../../assets/after.png'
import After from '../../assets/before.png'
import ReactCompareImage from 'react-compare-image'

import css from './Virtuals.module.css'

const Virtual = () => {
    return (
        <div className={css.Virtual}>
            <div className={css.left}>
                <span>Virtual Try-on</span>
                <span>Never Buy the Wrong Shade Again</span>
                <span>Try Now!</span>
                <img src={Shada} alt="" />

            </div>

            <div className={css.right}>
                <div className={css.wrapper}>
                    <ReactCompareImage leftImage={Before}
                        rightImage={After} />
                </div>

            </div>
        </div>
    );
};

export default Virtual