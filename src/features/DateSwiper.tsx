import { FC, useEffect, useLayoutEffect, useRef, useState } from "react";

import { SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  StyledWrapper,
  SwiperFraction,
  SwiperBullets,
  StyledSwiper,
  StyledDateStart,
  StyledDateEnd,
  StyledDateWrapper,
} from "./ui/StyledSwiper";
import { CirclePaginationBlock, EventSlider } from "./ui";
import gsap from "gsap";
import { styled } from "styled-components";
import type { Swiper as SwiperClass } from "swiper/types";
import { useCirclePagination } from "./hooks/useCirclePagination";
import { useDateData } from "./hooks/useDateData";

const TitleWrapper = styled.div`
  position: absolute;
  top: 10%;
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  margin-top: auto;
`;
const H1 = styled.h1`
  width: fit-content;
  font-size: 24px;
  font-weight: bold;
  margin-left: 30px;
  color: var(--second-primary);
  @media (min-width: 1024px) {
    font-size: 58px;
  }
`;
const Stick = styled.span`
  display: none;
  width: 3px;
  height: 100%;
  background: linear-gradient(to bottom, #3877ee, #ef5da8);
  @media (min-width: 1024px) {
    display: block;
  }
`;
type Props = {
  sliderId: string; // уникальный идентификатор
};

export const DateSwiper: FC<Props> = ({ sliderId }) => {
  const {
    rangeArr,
    dateArr,
    currentEnd,
    currentRange,
    currentStart,
    setCurrentEnd,
    setCurrentRange,
    setCurrentStart,
    loading,
    error,
  } = useDateData();

  const [currentSlide, setCurrentSlide] = useState<number>(1);

  const swiperRef = useRef<SwiperClass | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const fractionRef = useRef<HTMLDivElement | null>(null);

  const [isDesktop, setIsDesktop] = useState<boolean>(
    window.innerWidth >= 1024
  );
  const labels = rangeArr.map((r) => r.name);
  const { setupBullets } = useCirclePagination(
    paginationRef,
    labels,
    setCurrentSlide,
    { ringDiameter: 400 }
  );

  const animateNumbers = (
    from: number,
    to: number,
    setter: (val: number) => void
  ) => {
    gsap.to(
      { val: from },
      {
        val: to,
        duration: 1,
        ease: "power2.out",
        onUpdate: function () {
          setter(Math.round(this.targets()[0].val));
        },
      }
    );
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    setCurrentSlide(swiper.activeIndex + 1);
    const current = rangeArr[swiper.activeIndex];
    setCurrentRange(current.name);
    animateNumbers(currentStart, current.dateStart, setCurrentStart);
    animateNumbers(currentEnd, current.dateEnd, setCurrentEnd);
  };

  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  if (!rangeArr.length || loading) return <p>Loading...</p>;

  return (
    <StyledWrapper>
      <TitleWrapper>
        <Stick></Stick>{" "}
        <H1>
          Исторические
          <br /> даты
        </H1>
      </TitleWrapper>

      <StyledDateWrapper>
        <StyledDateStart>{currentStart}</StyledDateStart>
        <StyledDateEnd>{currentEnd}</StyledDateEnd>
      </StyledDateWrapper>

      {isDesktop && (
        <CirclePaginationBlock
          classNameSuffix={sliderId}
          pagRef={paginationRef}
        />
      )}
      <SwiperBullets
        className={`custom-bullets-${sliderId} swiper-pagination`}
      />

      <StyledSwiper
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
          el: isDesktop
            ? `.pagination-circle-${sliderId}`
            : `.custom-bullets-${sliderId}`,
        }}
        navigation={{
          prevEl: `.custom-prev-${sliderId}`,
          nextEl: `.custom-next-${sliderId}`,
        }}
        onInit={(swiper) => {
          if (isDesktop) setupBullets(swiper);
          handleSlideChange(swiper);
        }}
        onSlideChange={handleSlideChange}
        onSwiper={(s) => (swiperRef.current = s)}
      >
        {rangeArr.map((d) => (
          <SwiperSlide key={d.id}></SwiperSlide>
        ))}
      </StyledSwiper>

      <EventSlider
        data={dateArr.filter((o) => o.name === currentRange)}
        name={currentRange}
      />

      <SwiperFraction ref={fractionRef} className="custom-fraction">
        {currentSlide} / {rangeArr.length}
      </SwiperFraction>
      <div>
        <button
          type="button"
          className={`custom-prev custom-prev-${sliderId}`}
        ></button>
        <button
          type="button"
          className={`custom-next custom-next-${sliderId}`}
        ></button>
      </div>
    </StyledWrapper>
  );
};
