export function Sections() {
  return (
    <div className="flex gap-5  ">
      <div className="bg-shirtStyle bg-center h-[500px] w-[400px] flex flex-col items-center justify-center gap-12 hover:cursor-pointer group">
        <h2
          className="font-Inter font-bold text-5xl text-white group-hover:-translate-y-5 duration-200
        "
        >
          SHIRT STYLE!
        </h2>
        <button className="font-Inter w-[150px] h-[50px] bg-white group-hover:-translate-y-5 duration-500 ">
          Shop Now
        </button>
      </div>
      <div className="bg-louge  h-[500px] w-[400px] flex flex-col items-center justify-center gap-12 hover:cursor-pointer group">
        <h2 className="font-Inter font-bold text-5xl text-white group-hover:-translate-y-5 duration-200">
          LOUNGEWEAR
        </h2>
        <button className="font-Inter w-[150px] h-[50px] bg-white group-hover:-translate-y-5 duration-500  ">
          Shop Now
        </button>
      </div>
      <div className="bg-jacket bg-center h-[500px] w-[400px] flex flex-col items-center justify-center gap-12 hover:cursor-pointer group">
        <h2
          className="font-Inter font-bold text-5xl text-white group-hover:-translate-y-5 duration-200
        "
        >
          LIGHT JACKETS
        </h2>
        <button className="font-Inter w-[150px] h-[50px] bg-white group-hover:-translate-y-5 duration-500  ">
          Shop Now
        </button>
      </div>
    </div>
  );
}
