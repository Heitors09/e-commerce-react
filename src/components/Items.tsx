import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useCallback } from "react";
import { jeansCollection } from "./data/data";

export function Items() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="overflow-hidden flex flex-col items-center text-xl">
        <h1 className="mt-12 font-Inter text-4xl font-light mb-3">
          The best jeans you need!
        </h1>
        <div ref={emblaRef} className="relative  h-[400px]">
          <div className="flex  gap-1 px-1  w-full bg-stone-50 ">
            {jeansCollection.map((jeans) => (
              <div
                key={jeans.id}
                className="basis-80 h-[400px] p-3 shrink-0  w-[200px] -z-10 cursor-pointer rounded-md   relative  flex flex-col items-center font-light "
              >
                <img
                  src={jeans.url}
                  alt=""
                  className="  h-[90%] w-[90%] mx-auto rounded-md hover:-translate-y-2 duration-200 "
                />
                <p className="text-sm">{jeans.Name}</p>
                <footer className="font-medium text-md">${jeans.price}</footer>
              </div>
            ))}
          </div>
          <button className="absolute left-5 bottom-[50%]" onClick={scrollPrev}>
            <ChevronLeft />
          </button>
          <button
            className="absolute right-5 bottom-[50%] z-10"
            onClick={scrollNext}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}
