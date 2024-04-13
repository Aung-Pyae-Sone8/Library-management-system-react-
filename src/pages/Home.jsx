import HeroSection from "../components/HeroSection"
import book from "../assets/img1.png";

function Home() {

  return (
    <>
      {/* hero section */}
      <HeroSection />

      {/* book list  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-3">
        {[1, 2, 3, 4, 5].map((item) => (
          <div className="p-4 border border-1" key={item}>
            <img src={book} alt="book" />
            <div className="text-center space-y-2 mt-3">
              <h1>Book title</h1>
              <p>Description</p>
              {/* genres  */}
              <div className="flex flex-wrap">
                {
                  ['travel','knowledge','fiction','science'].map((genre) => (
                    <span key={genre} className="mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500">{genre}</span>
                  ))
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
