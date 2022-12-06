import React from "react";
import "./tms.css";
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import {Pagination, Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";

const TMS = () => {
  return (
    <section id=" tms">
      <h5>Client Transformations</h5>
      <h2>Testimonials</h2>

      <Swiper className="container tms_container" modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={40}
        navigation
        pagination= {{clickable: true}}>
        <SwiperSlide className="tm">
            <div className="client_avatar">
                <img src={AVTR1} alt=""/>
            </div>
            <h5 className="client_name">Best Coach</h5>
            <small className="client_review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque asperiores quidem voluptatum? Facilis ex architecto numquam nesciunt quisquam, facere sed.</small>
        </SwiperSlide>
        <SwiperSlide className="tm">
            <div className="client_avatar">
                <img src={AVTR2} alt=""/>
            </div>
            <h5 className="client_name">Best Coach</h5>
            <small className="client_review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque asperiores quidem voluptatum? Facilis ex architecto numquam nesciunt quisquam, facere sed.</small>
        </SwiperSlide>
        <SwiperSlide className="tm">
            <div className="client_avatar">
                <img src={AVTR3} alt=""/>
            </div>
            <h5 className="client_name">Best Coach</h5>
            <small className="client_review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque asperiores quidem voluptatum? Facilis ex architecto numquam nesciunt quisquam, facere sed.</small>
        </SwiperSlide>
        <SwiperSlide className="tm">
            <div className="client_avatar">
                <img src={AVTR4} alt=""/>
            </div>
            <h5 className="client_name">Best Coach</h5>
            <small className="client_review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque asperiores quidem voluptatum? Facilis ex architecto numquam nesciunt quisquam, facere sed.</small>
        </SwiperSlide>
        
        
      </Swiper>
    </section>
  );
};

export default TMS;
