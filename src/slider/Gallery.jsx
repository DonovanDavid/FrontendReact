
import {HeroSection,HeroContent,
    HeroImage,HeroSlide,HeroSlider,HeroWrapper,PrevArrow,NextArrow,SliderButtons} from './Slider';
    import React, {  useState, useRef, useEffect } from 'react';
const Gallery = ({slides}) => {
  
    const [current, SetCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)


    useEffect(() => {
        const nextSlide = () => {
            SetCurrent(current => (current === length - 1 ? 0 : current + 1))
        }
        timeout.current = setTimeout(nextSlide, 2000)
        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    }, [current, length]);

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        SetCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        SetCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
       <section>

        <HeroSection id='Home'>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            {index === current && (
                                <HeroSlider>
                                    <HeroImage src={slide.image} alt={slide.alt} />
                                    <HeroContent>
                                        <h4>WELCOME</h4>
                                        
                                    </HeroContent>
                                </HeroSlider>
                            )}
                        </HeroSlide>
                    );
                })}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
       
        </section>
    );
};

export default Gallery