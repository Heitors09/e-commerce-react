import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useCallback } from "react";
import { dressesCollection } from "./data/data";

export function DressCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="overflow-hidden flex flex-col items-center text-xl relative ">
        <div ref={emblaRef} className="relative  h-[400px]">
          <div className="flex  w-full ">
            {dressesCollection.map((dress) => {
              if (dress.promotion) {
                return (
                  <div
                    key={dress.id}
                    className="basis-80 h-[400px] p-3 shrink-0  w-[200px] -z-10 cursor-pointer rounded-md   relative  flex flex-col items-center font-light "
                  >
                    <img
                      src={dress.url}
                      alt=""
                      className="  h-[90%] w-[90%] mx-auto rounded-md hover:-translate-y-2 duration-200 "
                    />
                    <p className="text-sm">{dress.Name}</p>
                    <div className="flex gap-3">
                      <footer className="font-medium text-md line line-through">
                        ${dress.price}
                      </footer>
                      <footer className="font-medium text-md line text-red-900">
                        ${dress.price - 10}
                      </footer>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>

        <button
          className="p-5 bg-transparent absolute rounded-full z-20 top-[40%] left-0"
          onClick={scrollPrev}
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          className="p-5 bg-transparent absolute rounded-full z-20 top-[40%] right-0"
          onClick={scrollNext}
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </>
  );
}
