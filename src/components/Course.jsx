import Cards from "./Cards";
import list from '../list.json';

function Course(){

  const paidItems = list.filter((item) => item.category === "NEW");

  return (
    <>
      <hr />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            "What's <span className="text-pink-500">Trending </span>: Top Picks
            & Special Offers"
          </h1>
          <p className="mt-12 mb-6">
            Welcome to the Trending page! Discover the latest and most popular
            items and deals right here. From essential resources to exclusive
            promotions, stay updated with what's currently in demand. Explore
            top picks and special offers tailored to enhance your college
            experience. Whether you're looking for academic support or great
            deals, find out what's trending now.
          </p>
          {/* <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link> */}
          <hr />
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {paidItems.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
