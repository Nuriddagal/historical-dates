import { FC } from "react";
import GlobalStyle from "./GlobalStyle";
import { Container } from "./ui/Container.styled";
import { DateSwiper } from "../features/DateSwiper";

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <DateSwiper />
      </Container>
    </>
  );
};

export default App;
