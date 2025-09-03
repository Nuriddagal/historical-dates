import { FC, RefObject } from 'react';
import { styled } from 'styled-components';

type Props = {
  pagRef: RefObject<HTMLDivElement | null>;
  classNameSuffix: string; // уникальный суффикс для id/класса
};

const CirclePaginationWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .swiper-pagination-horizontal {
    width: 400px;
    height: 400px;
  }
`;

const CirclePagination = styled.div`
  position: relative;
  box-sizing: border-box;
  transform-origin: 50%;

  &::before {
    content: '';
    position: absolute;
    left: 51.43%;
    top: 50%;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    border: 1px solid var(--second-primary, #cfcfcf);
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 0;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.02),
      transparent 60%
    );
  }

  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #42567a;
    position: absolute;
    transform: translate(-50%, -50%);
    pointer-events: auto;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: #fff;
    transition: all 0.1s;
    opacity: 1;

    &::after {
      content: attr(data-index);
      font-size: 18px;
      display: none;
    }

    .bullet-label {
      content: attr(data-name);
      position: absolute;
      left: 130%;
      font-variant: small-caps;
      font-size: 20px;
      opacity: 0;
    }
  }

  .swiper-pagination-bullet-active,
  .swiper-pagination-bullet-active.active-bullet {
    width: 40px;
    height: 40px;
    background-color: #e5e5e5;
    border: 1px solid #42567a;
    color: #42567a;
    font-weight: bold;
  }

  .swiper-pagination-bullet-active::after,
  .swiper-pagination-bullet-active.active-bullet::after {
    display: block;
  }

  .swiper-pagination-bullet-active,
  .swiper-pagination-bullet-active.active-bullet {
    .bullet-label {
      transition: opacity ease-in-out 2s;
      opacity: 1;
    }
  }

  .swiper-pagination-bullet:hover,
  .swiper-pagination-bullet.inactive-bullet:hover {
    width: 40px;
    height: 40px;
    background-color: #e5e5e5;
    border: 1px solid #42567a;
    color: #42567a;
    font-weight: bold;

    &::after {
      display: block;
    }
  }
`;

const CirclePaginationBlock: FC<Props> = ({ pagRef, classNameSuffix }) => {
  return (
    <CirclePaginationWrapper>
      <CirclePagination
        ref={pagRef}
        className={`pagination-circle-${classNameSuffix}`}
      />
    </CirclePaginationWrapper>
  );
};

export default CirclePaginationBlock;
