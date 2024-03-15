import { Container } from "react-bootstrap";
import HeaderNetflix from "./HeaderNetflix";
import CarouselNetflix from "./CarouselNetflix";

const ContainerCarousel = () => {
  return (
    <>
      <Container fluid className="px-4">
        <HeaderNetflix></HeaderNetflix>

        <CarouselNetflix movie="avengers" titleSection="Trending Now"></CarouselNetflix>

        <CarouselNetflix movie="resident%20evil" titleSection="Watch it Again"></CarouselNetflix>

        <CarouselNetflix movie="fast%20and%20furious" titleSection="New Releases"></CarouselNetflix>
      </Container>
    </>
  );
};

export default ContainerCarousel;
