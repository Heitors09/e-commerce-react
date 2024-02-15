import { summerCollection } from "../data/data";
import { Navbar } from "../navbar";

export function Summer() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-5">
        {summerCollection.map((clothes) => (
          <div key={clothes.id} className="flex gap-12 bg-stone-50">
            <img src={clothes.url} className="w-[300px]" />
            <div className="font-Inter font-light flex flex-col gap-12">
              <h1 className=" text-2xl mt-5">{clothes.Name}</h1>
              <p className="w-[500px] text-xl ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum vero quae iure enim aliquam laboriosam odio blanditiis
                labore molestiae quia tenetur voluptas tempore, dolor, rerum
                assumenda! Consequuntur rerum eveniet repellendus.
              </p>
              <h2 className="text-3xl">$ {clothes.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
