const Banner = () => {
  return (
    <div
      className="text-center py-[130px]"
      style={{ backgroundImage: "url(/banner.png)" }}
    >
      <h1 className="font-bold text-[52px] text-white w-[897px] mx-auto mb-2">
        Discover an exceptional cooking class tailored for you!
      </h1>
      <p className="font-normal text-lg text-white w-[933px] mx-auto">
        Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
        Database and solve 500+ coding problems to become an exceptionally well
        world-class Programmer.
      </p>
      <div className="mt-10">
        <button className="font-semibold text-xl text-white border border-white rounded-[50px] py-5 px-[30px] mr-6  hover:bg-[#0BE58A] hover:text-[#150B2B] hover:border-[#0BE58A] duration-500		">
          Explore Now
        </button>
        <button className="font-semibold text-xl text-white border border-white rounded-[50px] py-5 px-[30px] mr-6  hover:bg-[#0BE58A] hover:text-[#150B2B] hover:border-[#0BE58A] duration-500		">
        Our Feedback
        </button>
      </div>
    </div>
  );
};

export default Banner;
