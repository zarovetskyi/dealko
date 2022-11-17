import { useEffect } from 'react';

import Swiper from 'swiper/swiper-bundle';
import 'swiper/swiper-bundle.min.css';

export default function Reviews()
{

    useEffect(() => {
        new Swiper(".reviews_slider", {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			navigation: {
				nextEl: '.slide_next',
				prevEl: '.slide_prev'
			},
			breakpoints: {
				200: {
					slidesPerView: 1
				},
				900: {
					slidesPerView: 2
				},
				1200: {
					slidesPerView: 3
				},
			}
			
		});
    }, []);


    return (
        <>
        <section className="customer_reviews" style={{ paddingTop: '50px' }}>
            <div className="customer_reviews_photo"></div>
            <div className="container flex  flex_e">
                <h2 className="small_title center">відгуки клієнтів</h2>
                
                <div className="reviews_slider_wrap">

                <div>
                <div className="swiper reviews_slider">
                    <div className="swiper-wrapper">

                    <div className="swiper-slide">
                        <div className="slider_img" style={{ backgroundImage: 'url(/img/website_design.jpg)' }}></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quis nihil quas velit distinctio vitae?</p>
                        <span>Username</span>					
                    </div>
                    <div className="swiper-slide">
                        <div className="slider_img" style={{ backgroundImage: 'url(/img/website_design.jpg)' }}></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quis nihil quas velit distinctio vitae?</p>
                        <span>Username</span>					
                    </div>
                    <div className="swiper-slide">
                        <div className="slider_img" style={{ backgroundImage: 'url(/img/website_design.jpg)' }}></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quis nihil quas velit distinctio vitae?</p>
                        <span>Username</span>					
                    </div>
                    <div className="swiper-slide">
                        <div className="slider_img" style={{ backgroundImage: 'url(/img/website_design.jpg)' }}></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quis nihil quas velit distinctio vitae?</p>
                        <span>Username</span>					
                    </div>
                    <div className="swiper-slide">
                        <div className="slider_img" style={{ backgroundImage: 'url(/img/website_design.jpg)' }}></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quis nihil quas velit distinctio vitae?</p>
                        <span>Username</span>					
                    </div>

                        
                    </div>

                    
                </div>
                
                    
                </div>
                
                <div className="flex slide_nav">
                    <div className="slide_prev"></div>
                    <div className="slide_next"></div>
                </div>
                </div>

            </div>
        </section>
        </>
    )
}