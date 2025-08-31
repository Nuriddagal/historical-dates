import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
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
import gsap from "gsap";
import { EventSlider } from "./ui/EventSlider.styled";

type DateRangeArr = {
  id: number;
  dateStart: number;
  dateEnd: number;
  name: string;
};
type DateEventsArr = {
  id: number;
  name: string;
  description: string;
  year: number;
};
export const DateSwiper: FC = () => {
  const [rangeArr, setRangeArr] = useState<DateRangeArr[]>([]);
  const [dateArr, setDateArr] = useState<DateEventsArr[]>([]);
  const [currentStart, setCurrentStart] = useState<number>(0);
  const [currentEnd, setCurrentEnd] = useState<number>(0);
  const [currentRange, setCurrentRange] = useState<string>("");

  const loadDate = async <T,>(dataEndpoint: string): Promise<T[]> => {
    try {
      const response = await fetch(
        `https://68b199a2a860fe41fd5efb5e.mockapi.io/api/hisdate/${dataEndpoint}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: T[] = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to load JSON:", error);
      return [];
    }
  };
  const animateNumbers = (
    from: number,
    to: number,
    setter: (val: number) => void
  ) => {
    const obj = { val: from }; // создаём объект для анимации
    gsap.to(obj, {
      val: to,
      duration: 1,
      ease: "power2.out",
      onUpdate: () => {
        setter(Math.round(obj.val));
      },
    });
  };
  useEffect(() => {
    const fetchAll = async () => {
      const [rangeData, eventData] = await Promise.all([
        loadDate<DateRangeArr>("dateRange"),
        loadDate<DateEventsArr>("historicalEvents"),
      ]);
      setRangeArr(rangeData);
      setDateArr(eventData);
      setCurrentStart(rangeData[0]?.dateStart || 0);
      setCurrentEnd(rangeData[0]?.dateEnd || 0);
      setCurrentRange("technology");
    };
    fetchAll();
  }, []);
  if (!rangeArr?.length) {
    return (
      <>
        <p>sceleton</p>
        <p>sceleton</p>
      </>
    );
  }
  return (
    <StyledWrapper>
      <StyledDateWrapper>
        <StyledDateStart>{currentStart}</StyledDateStart>{" "}
        <StyledDateEnd>{currentEnd}</StyledDateEnd>
      </StyledDateWrapper>
      <StyledSwiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true, el: ".custom-bullets" }}
        navigation
        allowTouchMove={false}
        onInit={(swiper) => {
          const total = swiper.slides.length;
          const fraction = document.querySelector(".custom-fraction");
          if (fraction) {
            fraction.textContent = `1 / ${total}`;
          }

          swiper.on("slideChange", () => {
            if (fraction) {
              fraction.textContent = `${swiper.activeIndex + 1} / ${total}`;
            }
          });
        }}
        onSlideChange={(swiper) => {
          const current = rangeArr[swiper.activeIndex];
          setCurrentRange(current.name);
          if (current) {
            animateNumbers(currentStart, current.dateStart, setCurrentStart);
            animateNumbers(currentEnd, current.dateEnd, setCurrentEnd);
          }
        }}
      >
        {rangeArr.map((d, id) => (
          <SwiperSlide key={d.name}></SwiperSlide>
        ))}
      </StyledSwiper>
      <EventSlider
        data={dateArr.filter((o) => o.name === currentRange)}
        name={currentRange}
      ></EventSlider>
      <SwiperBullets className="custom-bullets swiper-pagination"></SwiperBullets>
      <SwiperFraction className="custom-fraction"></SwiperFraction>
    </StyledWrapper>
  );
};
