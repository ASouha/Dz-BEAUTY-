import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import swipper1 from '../assets/images/swipper1.png';
import swipper2 from '../assets/images/swipper2.png';
import swipper3 from '../assets/images/swipper3.png';
import { useTranslation } from 'react-i18next'; 

const ServiceSwiper = () => {
  const { t } = useTranslation(); 

  return (
    <section className="pt-[7rem] pb-[2rem] bg-gray-100">
      <div className="lg:mx-auto max-w-5xl mx-[1.5rem]">
        <h1 className="text-[3rem] font-bold mb-[2rem] text-center text-[#614545]">
          {t('services_section.title')} 
        </h1>
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect="coverflow"
          loop={true}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          grabCursor={true}
          coverflowEffect={{
            rotate: 0,
            slideShadows: false,
          }}
        >
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <img
                src={swipper1}
                alt={t('services_section.skincare_day')}  
                className="w-full rounded-lg shadow-lg"
              />
              <h3 className="text-center mt-2 font-medium">
                {t('services_section.skincare_day')} 
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <img
                src={swipper2}
                alt={t('services_section.haircare_day')}  
                className="w-full rounded-lg shadow-lg"
              />
              <h3 className="text-center mt-2 font-medium">
                {t('services_section.haircare_day')}
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <img
                src={swipper3}
                alt={t('services_section.nails_day')}  
                className="w-full rounded-lg shadow-lg"
              />
              <h3 className="text-center mt-2 font-medium">
                {t('services_section.nails_day')} 
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ServiceSwiper;
