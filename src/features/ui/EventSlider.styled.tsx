import { FC, useLayoutEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import gsap from "gsap";
import "swiper/css";

import { EventSlide } from "./EventSlide.styled";
import styled from "styled-components";

type Props = {
  id: number;
  name: string;
  description: string;
  year: number;
};
type EventSlideProps = {
  data: Props[];
  name: string;
};
const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 45%;
  z-index: 20;
  @media (min-width: 1024px) {
    top: auto;
    bottom: 5%;
  }
  .event-prev,
  .event-next {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 1px 1px 10px gray;
    opacity: 1;
    @media (max-width: 1024px) {
      opacity: 0;
    }
    top: 50%;
    transform: rotateY(-50%);
  }
  .event-next {
    right: 20px;
  }
  .event-prev {
    left: 20px;
  }
  .event-prev::after,
  .event-next::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 30%;
    width: 10px;
    height: 10px;
    border-top: 2px solid #3877ee;
    border-right: 2px solid #3877ee;
    transform: rotate(45deg);
    font-size: 18px;
    font-weight: bold;
  }
  .event-prev::after {
    transform: rotate(-135deg);
    left: 12px;
  }
  .event-prev.swiper-button-disabled,
  .event-next.swiper-button-disabled {
    transition: opacity ease 0.3s;
    opacity: 0;
  }
`;
const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
const Devider = styled.div`
  display: block;
  width: 80%;
  height: 1px;
  background-color: var(--second-primary);
  @media (min-width: 1024px) {
    display: none;
  }
`;
const Typography = styled.p`
  width: 80%;
  text-align: start;
  font-variant: small-caps;
  font-size: 18px;
  font-weight: 600;
  color: var(--second-primary);
  @media (min-width: 1024px) {
    display: none;
  }
`;
const Slider = styled(Swiper)`
  @media (min-width: 1024px) {
    width: 90%;
  }
  width: 100%;
  margin-top: 15px;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;
const EventSlider: FC<EventSlideProps> = ({ data, name }) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const prevDataRef = useRef<Props[]>([]);
  useLayoutEffect(() => {
    const isDataChanged =
      JSON.stringify(prevDataRef.current) !== JSON.stringify(data);
    if (!boxRef.current || !isDataChanged) return;

    const header = boxRef.current.querySelectorAll(".name, .devider");
    gsap.fromTo(
      header,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        clearProps: "transform, opacity",
      }
    );

    const innerEls = Array.from(
      boxRef.current.querySelectorAll<HTMLElement>(".event-wrap")
    );
    if (innerEls.length > 0) {
      gsap.killTweensOf(innerEls);

      gsap.fromTo(
        innerEls,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          clearProps: "transform, opacity",
        }
      );
    }
    prevDataRef.current = data;
  }, [data]);
  if (!data.length) return <div>Loading</div>;
  return (
    <Wrapper ref={boxRef}>
      <StyledDiv>
        <Typography className="name">{name}</Typography>
        <Devider className="devider"></Devider>
      </StyledDiv>
      <Slider
        modules={[FreeMode, Navigation]}
        freeMode={true}
        spaceBetween={20}
        navigation={{
          enabled: true,
          prevEl: ".event-prev",
          nextEl: ".event-next",
        }}
        slidesOffsetBefore={25}
        slidesOffsetAfter={25}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((obj) => (
          <SwiperSlide key={obj.id}>
            <EventSlide
              year={obj.year}
              description={obj.description}
            ></EventSlide>
          </SwiperSlide>
        ))}
      </Slider>

      <button type="button" className="event-prev"></button>
      <button type="button" className="event-next"></button>
    </Wrapper>
  );
};
export default EventSlider;
