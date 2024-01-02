import React from 'react'
import css from './Testimonial.module.css'
import Hero from '../../assets/Testimonials.png'
import { TestimonialsData } from '../data/Testimonials'
import { Swiper, SwiperSlide } from 'swiper/react'


const Testimonials = () => {
    return (
                <div className={css.testimonials}>
                    <div className={css.wrapper}>

                        <div className={css.container}>

                            <span>Top Rated</span>
                            <span>
                                seedily say has suitable and boy . Exercise joy man childeren rejoiced
                            </span>
                        </div>

                        <img src={Hero} alt="" />
                        <div className={css.container}>
                            <span>100k</span>
                            <span>Happy Customers with us</span>
                        </div>
                        </div>

                    <div className={css.reviews}>Reviews</div>

        {/* ************************************************************************* */}


                    <div className={css.carousel}>
                        <Swiper
                        slidesPerView={3}
                        slidesPerGroup={1}
                        spaceBetween={20}
                        className={css.tCarousel}
                        >
                            {
                                TestimonialsData.map((testimonial, i)=> (
                                    <SwiperSlide>
                                        <div className={css.testimonial}>
                                            <img src={testimonial.image} alt="" />
                                            <span>{testimonial.comment}</span>
                                            <hr/>
                                            <span>{testimonial.name}</span>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>
                    </div>
                </div>

    );
};

export default Testimonials