const TopBrand = () => {
  return (
    <div className="py-10">
      <div>
        <h1 className="text-center text-3xl text-white bg-slate-800 w-5/6 mx-auto font-semibold py-4">
          Top Products
        </h1>
      </div>
      <div className="grid grid-cols-3 w-10/12 gap-10 mt-4 mx-auto">
        <div className="flex flex-col justify-center items-center p-4 text-lg bg-gray-200 shadow-xl rounded-lg">
          <img
            src="https://i.ibb.co/FHNhKJ1/electric-car.png"
            alt="Electric Car"
            width={"64px"}
          />
          <h1>Electric Car</h1>
        </div>

        <div className="flex flex-col justify-center items-center p-4 text-lg bg-gray-200 shadow-xl rounded-lg">
          <img
            src="https://i.ibb.co/5TzbymQ/car-engine.png"
            alt="Car Engine"
            width={"64px"}
          />
          <h1>Car Engine</h1>
        </div>

        <div className="flex flex-col justify-center items-center p-4 text-lg bg-gray-200 shadow-xl rounded-lg">
          <img
            src="https://i.ibb.co/jynYr61/air-pump.png"
            alt="Air Pump"
            width={"64px"}
          />
          <h1>Air Pump</h1>
        </div>

        <div className="flex flex-col justify-center items-center p-4 text-lg bg-gray-200 shadow-xl rounded-lg">
          <img
            src="https://i.ibb.co/zf1vrbK/motorbike.png"
            alt="Motorbike"
            width={"64px"}
          />
          <h1>Motorbike</h1>
        </div>

        <div className="flex flex-col justify-center items-center p-4 text-lg bg-gray-200 shadow-xl rounded-lg">
          <img
            src="https://i.ibb.co/kXzwYLG/steering.png"
            alt="Steering"
            width={"64px"}
          />
          <h1>Steering</h1>
        </div>

        <div className="flex flex-col justify-center items-center p-4 text-lg bg-gray-200 shadow-xl rounded-lg">
          <img
            src="https://i.ibb.co/BgqPms0/sedan.png"
            alt="Sedan"
            width={"64px"}
          />
          <h1>Sedan</h1>
        </div>
      </div>
    </div>
  );
};

export default TopBrand;
