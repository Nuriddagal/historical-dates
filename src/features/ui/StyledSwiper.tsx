import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const StyledWrapper = styled.div`
  --nav-size: 32px;
  --nav-border: 2px;
  --nav-color: #42567a;
  --nav-bg-hover: #42567a;
  --nav-color-hover: #fff;
  --nav-bottom-mobile: 10px;
  --nav-bottom-desktop: 25%;
  --divider-color: #42567a50;

  width: 100%;
  height: 100vh;
  position: relative;
  margin: auto;

  .custom-prev,
  .custom-next,
  [class*='custom-prev-'],
  [class*='custom-next-'] {
    position: absolute;
    z-index: 11;
    color: var(--nav-color);
    width: var(--nav-size);
    height: var(--nav-size);
    border: var(--nav-border) solid var(--nav-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    transition: background-color 0.2s ease, color 0.2s ease, opacity 0.2s ease,
      transform 0.15s ease;
    user-select: none;
    bottom: var(--nav-bottom-mobile);
    top: auto;
    margin-top: 0;
    cursor: pointer;
    /* accessibility focus */
    &:focus {
      outline: 3px solid rgba(66, 86, 122, 0.12);
      outline-offset: 4px;
    }
  }

  @media (min-width: 1024px) {
    width: 70%;
    border-right: 1px solid var(--divider-color);
    border-left: 1px solid var(--divider-color);

    &::after {
      content: '';
      position: absolute;
      width: 1px;
      height: 100%;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--divider-color);
    }
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      top: 50%;
      transform: translateY(-50%);
      background-color: var(--divider-color);
    }

    .custom-prev,
    .custom-next,
    [class*='custom-prev-'],
    [class*='custom-next-'] {
      bottom: var(--nav-bottom-desktop);
    }
  }

  .custom-next,
  [class*='custom-next-'] {
    left: 52px;
    @media (min-width: 1024px) {
      left: 77px;
    }
  }
  .custom-prev,
  [class*='custom-prev-'] {
    left: 10px;
    @media (min-width: 1024px) {
      left: 25px;
    }
  }

  .custom-next.swiper-button-disabled,
  .custom-prev.swiper-button-disabled,
  [class*='custom-next-'].swiper-button-disabled,
  [class*='custom-prev-'].swiper-button-disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  .custom-prev::after,
  .custom-next::after,
  [class*='custom-prev-']::after,
  [class*='custom-next-']::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 10px;
    height: 10px;
    border-top: 2px solid var(--nav-color);
    border-right: 2px solid var(--nav-color);
    pointer-events: none;
  }
  .custom-prev::after,
  [class*='custom-prev-']::after {
    transform: translate(-50%, -50%) rotate(-135deg);
  }

  .custom-prev:hover,
  .custom-next:hover,
  [class*='custom-prev-']:hover,
  [class*='custom-next-']:hover {
    background-color: var(--nav-bg-hover);
    color: var(--nav-color-hover);
  }

  .custom-bullets {
    position: absolute;
    bottom: 32px;
    z-index: 10;
  }

  & .swiper-pagination-bullet {
    background: rgba(66, 86, 122, 0.35);
    opacity: 1;
  }
  & .swiper-pagination-bullet-active {
    background: var(--nav-color);
  }
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: fit-content;
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
  bottom: 52px;
  left: 15px;
  color: #42567a;
  font-weight: bold;
  font-size: 16px;

  @media (min-width: 1024px) {
    left: 25px;
    bottom: 30%;
  }
`;

export const StyledDateWrapper = styled.p`
  position: absolute;
  top: 30%;
  text-align: center;
  width: 100%;
  font-family: var(--primary-font);
  font-weight: 600;
  font-size: 58px;
  user-select: none;

  @media (min-width: 1024px) {
    transform: translateY(-50%);
    font-size: 150px;
    top: 50%;
  }
`;

export const StyledDateStart = styled.span`
  color: var(--primary-color);
  margin-right: 50px;
`;
export const StyledDateEnd = styled.span`
  color: var(--secondary-color);
`;
