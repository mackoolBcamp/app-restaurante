import React, { useState } from "react";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: "http://drive.google.com/uc?export=view&id=1F6_H-xQqfmFPI65VKXplmQH0SRTDsbYz",
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: "http://drive.google.com/uc?export=view&id=1e9sKIBRD4Rl55piBCa7_smOGLSo59Egy",
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: "http://drive.google.com/uc?export=view&id=14sBHqm9eOOBqwnXzHHmi90FGYpzTcw9d",
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
];

function Carrousel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        className="fotos-resolucion"
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Carrousel;
