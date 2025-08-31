import { FC, useLayoutEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
  top: 50%;
  z-index: 20;
`;
const StyledDiv = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
const Devider = styled.div`
  width: 80%;
  height: 1px;
  background-color: var(--second-primary);
`;
const Typography = styled.p`
  width: 80%;
  text-align: start;
  font-variant: small-caps;
  font-size: 18px;
  font-weight: 600;
  color: var(--second-primary);
`;
const Slider = styled(Swiper)`
  @media (max-width: 820px) {
    width: 100%;
  }
  width: 80%;
  margin-top: 15px;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
  &:first-child {
    margin-left: 30px;
  }
`;
export const EventSlider: FC<EventSlideProps> = ({ data, name }) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!boxRef.current) return;

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
  }, [data]);
  if (!data.length) return <div>Loading</div>;
  return (
    <Wrapper ref={boxRef}>
      <StyledDiv>
        <Typography className="name">{name}</Typography>
        <Devider className="devider"></Devider>
      </StyledDiv>
      <Slider
        spaceBetween={20}
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
          <SwiperSlide style={{ marginLeft: "25px" }} key={obj.id}>
            <EventSlide
              year={obj.year}
              description={obj.description}
            ></EventSlide>
          </SwiperSlide>
        ))}
      </Slider>
    </Wrapper>
  );
};
