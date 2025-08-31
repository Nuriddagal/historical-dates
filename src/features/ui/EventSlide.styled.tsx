import { FC } from "react";
import styled from "styled-components";

type Props = {
  year: number;
  description: string;
};
const YearTypography = styled.p`
  font-family: var(--secondary-font);
  color: var(--primaty-color);
  width: 100%;
`;
const DescriptionTypography = styled.p`
  font-family: var(--primary-font);
  color: var(--second-primary);
`;
const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 250px;
  width: 250px;
`;

export const EventSlide: FC<Props> = ({ year, description }) => {
  return (
    <SlideContainer className="event-wrap">
      <YearTypography>{year}</YearTypography>
      <DescriptionTypography>{description}</DescriptionTypography>
    </SlideContainer>
  );
};
