import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";


const TestMonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="my-12">
            <SectionTitle
                subheading={"---What Our Clients Say---"}
                heading={"TESTIMONIALS"}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                <div className="text-center">
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="flex flex-col items-center my-16 mx-20">
                                <Rating 
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="my-6">{review.details}</p>
                                <h2 className=" text-2xl text-orange-500">{review.name}</h2>
                            </div>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default TestMonial;