import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;

    z-index: 11;
    color: #42567a;
    width: 32px;
    height: 32px;
    border: 2px solid #42567a;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    transition: all 0.3s ease;
    user-select: none;
    bottom: 10px;
    /* reset swiper defaul styles */
    top: auto;
    margin-top: 0;
  }
  .swiper-button-next {
    /* prev-button width + left + gap10px */
    left: 52px;
  }
  .swiper-button-prev {
    left: 10px;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 18px;
    font-weight: bold;
  }

  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    background-color: #42567a;
    color: #fff;
  }
  .custom-bullets {
    position: absolute;
    top: auto;
    bottom: 32px;
    z-index: 10;
  }
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  min-height: 80vh;
  height: 100%;
`;

export const SwiperBullets = styled.div`
  .swiper-pagination-bullet {
    background: rgba(66, 86, 122, 0.35);
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: #42567a;
  }
`;
export const SwiperFraction = styled.div`
  position: absolute;
  /* nav-buttons heigth + 10px bottom + 10px gap */
  bottom: 52px;
  left: 15px;
  color: #42567a;
  font-weight: bold;
  font-size: 16px;
`;
export const StyledDateWrapper = styled.p`
  position: absolute;
  top: 40%;
  text-align: center;
  width: 100%;
  font-family: var(--primary-font);
  font-weight: 600;
  font-size: 58px;
`;
export const StyledDateStart = styled.span`
  color: var(--primary-color);
`;
export const StyledDateEnd = styled.span`
  color: var(--secondary-color);
`;
