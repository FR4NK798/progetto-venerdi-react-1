import { Container } from "react-bootstrap";
import HeaderNetflix from "./HeaderNetflix";
import CarouselNetflix from "./CarouselNetflix";
import FooterNetflix from "./FooterNetflix";

const ContainerCarousel = () => {
  return (
    <>
      <Container fluid className="px-4">
        <HeaderNetflix></HeaderNetflix>

        <CarouselNetflix movie="avengers"></CarouselNetflix>

        <CarouselNetflix movie="resident%20evil"></CarouselNetflix>

        <CarouselNetflix movie="fast%20and%20furious"></CarouselNetflix>
        <FooterNetflix></FooterNetflix>
      </Container>
    </>
  );
};

export default ContainerCarousel;
