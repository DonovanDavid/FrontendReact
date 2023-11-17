import React, { useState, useRef, useEffect } from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import styled, { css } from 'styled-components';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';


export const HeroSection = styled.section`
height: 40vh;
  width: 100%;
  padding: 1rem;
`;

export const HeroWrapper = styled.div`
padding: 4rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

`;

export const HeroSlide = styled.div`
z-index: 1;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;
`;

export const HeroSlider = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

&::before {
  content: '';
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100vh;
  bottom: 0vh;
  left: 0;
  overflow: hidden;
  opacity: 0.6;
  
}
`;

export const HeroImage = styled.img`
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const HeroContent = styled.div`
position: relative;
z-index: 3;
max-width: 800px;
color: #fff;
text-align: center;
text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);

h1 {
  font-size: 3rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

@media screen and (max-width: 360px) {
  max-width: 95%;
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1rem;
  }
}

@media screen and (min-width: 361px) and (max-width: 375px) {
  max-width: 95%;
  h1 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.2rem;
  }
}

@media screen and (min-width: 376px) and (max-width: 720px) {
  max-width: 90%;
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
  }
}

@media screen and (min-width: 721px) and (max-width: 1366px) {
  max-width: 85%;
  h1 {
    font-size: 3.5rem;
  }
  p {
    font-size: 1.8rem;
  }
}

@media screen and (min-width: 1367px) and (max-width: 1440px) {
  max-width: 80%;
  h1 {
    font-size: 4rem;
  }
  p {
    font-size: 2rem;
  }
}

@media screen and (min-width: 1441px) and (max-width: 1920px) {
  max-width: 80%;
  h1 {
    font-size: 4.5rem;
  }
  p {
    font-size: 2.2rem;
  }
}

`;

export const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

export const SliderButtons = styled.div`
position: absolute;
bottom: 40px; /* Ajusta la distancia desde la parte inferior */
width: 100%;
display: flex;
justify-content: center;
align-items: center;
z-index: 4;
`;

export const arrowButtons = css`
width: 50px;
height: 50px;
color: #fff;
cursor: pointer;

border-radius: 50%;
margin: 0 20px; /* Añade un espacio entre los botones */
user-select: none;
transition: 0.3s;

&:hover {
  background: #cd853f;
  transform: scale(1.1);
  border-radius: 50%; /* Quitar el borde circular */
}
`;


export const PrevArrow = styled(IoArrowBack)`
${arrowButtons}
`;

export const NextArrow = styled(IoArrowForward)`
${arrowButtons}
`;