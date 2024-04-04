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
  const [activeImage, setActiveImage] = useState<string>(images[0]);
  const [index, setIndex] = useState(0);

  const handleThumbnail = (src: string) => {
    const imageIndex = images.indexOf(src) ?? 0;
    setIndex(imageIndex);
  }
  return (
    <div className={styles.container}>
      <div id="sliderComp">
         <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={platform === 'mobile' ? [Pagination] : []}
          className={styles.swiper}
          tabIndex={index}
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
              <SwiperSlide onClick={() => handleThumbnail(obj)}>
                <img src={obj} className={styles.thumb} alt="thumb img"/>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  )
}

export default ImageSlider;