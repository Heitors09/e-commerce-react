import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

import { useCallback } from "react";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  console.log(emblaApi);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="overflow-hidden  ">
      <div ref={emblaRef}>
        <div className="flex">
          <div className=" shrink-0 basis-full flex gap-5 bg-stone-50">
            <img
              src="https://i.pinimg.com/564x/fb/d5/ec/fbd5eca24b28beea96359eeea6b2f10a.jpg"
              alt=""
            />
            <div className="flex flex-col gap-12 mt-[300px] ">
              <div className="w-[300px] h-[300px] bg-yellow-200 rounded-full absolute top-40"></div>
              <h1 className="font-Inter font-light text-7xl relative">
                SUMMER SALE
              </h1>
              <p className="tracking-wide font-Inter font-light text-xl relative">
                DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
              </p>
              <button className="border-2 border-solid  border-slate-700 w-[150px] h-[50px] font-Inter font-extralight flex items-center justify-center relative hover:bg-slate-900 duration-200 hover:text-white">
                Shop Now
                <ChevronRight className="font-light size-4" />
              </button>
            </div>
          </div>

          <div className="shrink-0 basis-full flex gap-5 bg-stone-50">
            <img
              src="https://i.pinimg.com/564x/58/5b/6d/585b6d13f90b53550cc0f78946e26e25.jpg"
              alt=""
            />
            <div className="flex flex-col gap-12 mt-[300px] ">
              <div className="w-[300px] h-[300px] bg-red-200 rounded-full absolute top-40"></div>
              <h1 className="font-Inter font-light text-7xl relative">
                AUTUMN COLLECTION
              </h1>
              <p className="tracking-wide font-Inter font-light text-xl relative">
                DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
              </p>
              <button className=" hover:bg-slate-900 duration-200 hover:text-white border-2 border-solid  border-slate-700 w-[150px] h-[50px] font-Inter font-extralight flex items-center justify-center relative">
                Shop Now
                <ChevronRight className="font-light size-4" />
              </button>
            </div>
          </div>
          <div className=" shrink-0 basis-full flex gap-5 bg-stone-50">
            <img
              src="https://i.pinimg.com/564x/d9/f3/93/d9f393b0d7b7ce927cb8d474a733929e.jpg"
              alt=""
            />
            <div className="flex flex-col gap-12 mt-[300px] ">
              <div className="w-[300px] h-[300px] bg-lime-200 rounded-full absolute top-40"></div>
              <h1 className="font-Inter font-light text-7xl relative">
                LOUNGEWEAR LOVE
              </h1>
              <p className="tracking-wide font-Inter font-light text-xl relative">
                DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
              </p>
              <button className=" hover:bg-slate-900 duration-200 hover:text-white border-2 border-solid  border-slate-700 w-[150px] h-[50px] font-Inter font-extralight flex items-center justify-center relative">
                Shop Now
                <ChevronRight className="font-light size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={scrollPrev}
        className="absolute bottom-44 rounded-full hover:bg-stone-100 hover:opacity-15 text-slate-700	hover:text-stone-700 p-3"
      >
        <ChevronLeft className="" />
      </button>
      <button
        onClick={scrollNext}
        className=" absolute bottom-[200px] right-0	rounded-full hover:bg-stone-500 hover:opacity-15 text-slate-700	hover:text-stone-900 p-3"
      >
        <ChevronRight className="size-7" />
      </button>
    </div>
  );
}
