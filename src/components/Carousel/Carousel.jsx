import './Carousel.css';
import { useState } from 'react';
import { ReactComponent as ArrowLeft } from '../../assets/arrow_left.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow_right.svg';
import { ReactComponent as ArrowLeftMobile } from '../../assets/arrow-left_mobile.svg';
import { ReactComponent as ArrowRightMobile } from '../../assets/arrow_right_mobile.svg';


function Carousel({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };


    return (

        <div className='carousel'>
            {slides &&
                <img src={slides[current]} alt={`carousel img ${current}`} className='carouselImg' />
            }
            <div className='carouselArrowLeft'>
                <ArrowLeft onClick={prevSlide} />
                <ArrowLeftMobile onClick={prevSlide} />

            </div>
            <div className='carouselArrowRight'>
                <ArrowRight onClick={nextSlide} />
                <ArrowRightMobile onClick={nextSlide} />
            </div>
        </div>
    )
}

export default Carousel