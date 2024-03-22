import React, { useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Thumbs, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import styles from './slider.module.css'

interface ImageSliderProps {
  images: Array<string>;
  platform?: 'web' | 'mobile';
}



const ImageSlider: React.FC<ImageSliderProps> = ({images, platform = 'mobile'}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);
  return (
    <div className={styles.container}>
      <div id="sliderComp">
         <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={styles.swiper}
        >
          {images.map((obj)=>(
            <SwiperSlide><img src={obj} alt="product img"/></SwiperSlide>
          ))}
        </Swiper> 
        {platform === 'web' && (
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={4}
            slidesPerView={3}
            freeMode={false}
            watchSlidesProgress={true}
            modules={[Navigation, Thumbs]}
            className={styles.swiper}>
            {images.map((obj) => (
              <SwiperSlide><img src={obj} style={{maxWidth: 80}} alt="thumb img"/></SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  )
}

export default ImageSlider;