const ServicesComponent = () => {
  return (
    <div className="w-11/12 mx-auto bg-white p-4">
      <h1 className="text-center text-3xl font-semibold py-5 text-white bg-slate-800 rounded-lg">
        Features and Services
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-between ">
        <div className="flex flex-col items-start mb-6 mt-10">
          <div className="flex items-center pb-1">
            <img
              src="https://i.ibb.co/S3XqmxJ/compliance.png"
              alt="Left Icon"
              width="24"
              height="24"
              className="mr-2"
            />
            <div className="text-lg font-semibold">
              <h2>Car Listings and Search</h2>
            </div>
          </div>
          <p className="ml-8 mb-4">
            Offer a comprehensive database of cars for sale, allowing users to
            search, filter, and compare various makes and models. Include
            detailed information about each vehicle, such as price, mileage,
            year, and specifications
          </p>
          <div className="flex items-center">
            <img
              src="https://i.ibb.co/b7TCCc2/engineering.png"
              alt="Left Icon 2"
              width="24"
              height="24"
              className="mr-2"
            />
            <h2 className="text-lg font-semibold">
              Service and Maintenance Information
            </h2>
          </div>
          <p className="ml-8 mb-4">
            Provide resources on car maintenance, including schedules for oil
            changes, brake checks, and tire rotations. Offer tips and guides on
            how to keep a vehicle in optimal condition.
          </p>
          <div className="flex items-center">
            <img
              src="https://i.ibb.co/CbGTnKZ/finance.png"
              alt="Left Icon 3"
              width="24"
              height="24"
              className="mr-2"
            />
            <h2 className="text-lg font-semibold">
              Financing and Loan Calculators
            </h2>
          </div>
          <p className="ml-8 mb-4">
            Assist visitors in understanding their financing options. Implement
            loan calculators to help users estimate monthly payments and
            interest rates for car loans.
          </p>
        </div>

        <div className="mx-8">
          <img
            src="https://i.ibb.co/xCh3mvH/Car-Wall-1.jpg"
            alt="Services"
            width="1444"
          />
        </div>

        <div className="flex flex-col mt-10 lg:mt-0 items-start lg:items-end">
          <div className="flex flex-col text-right items-end">
            <div className="flex text-right">
              <h2 className="text-lg font-semibold">Reviews & Ratings</h2>
              <img
                src="https://i.ibb.co/gVhKdC4/customer-review.png"
                alt="Right Icon"
                width="24"
                height="24"
                className="ml-2"
              />
            </div>
            <p className=" mr-8 mb-4">
              Allow users to leave reviews and ratings for cars they purchased
              or services they've received. This can build trust and credibility
              among potential buyers.
            </p>
          </div>
          <div className="flex flex-col text-right items-end">
            <div className="flex text-right">
              <h2 className="text-lg font-semibold">Auto Blog and News</h2>
              <img
                src="https://i.ibb.co/McqdSz3/article.png"
                alt="Right Icon 2"
                width="24"
                height="24"
                className="ml-2"
              />
            </div>
            <p className="mr-8 mb-4">
              Keep users informed with the latest trends, news, and reviews in
              the automotive industry. Regularly update a blog section with
              articles about car buying guides, maintenance tips, and industry
              news.
            </p>
          </div>
          <div className="flex flex-col text-right items-end">
            <div className="flex text-right">
              <h2 className="text-lg font-semibold">
                Customer Support and Contact
              </h2>
              <img
                src="https://i.ibb.co/RNVZtCQ/support.png"
                alt="Right Icon 3"
                width="24"
                height="24"
                className="ml-2"
              />
            </div>
            <p className="mr-8 mb-4">
              {" "}
              Provide easy access to customer support through chat, email, or a
              helpline. Ensure that your website includes contact information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
