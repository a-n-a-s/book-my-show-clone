import React , {useContext ,useState} from "react";
import { MovieContext } from "../../Context/movie.context";
import PaymentModal from "../Paymentmodal/Payment.component";

const MovieInfo = () => {
  const [isOpen ,setIsOpen]  = useState(false);
  const [price , setPrice] = useState(0);

  const rentMovies = () => {
    setIsOpen(true);
    setPrice(149);
  }
  const buyMovies = () => {
    setIsOpen(true);
    setPrice(699);
  }
 

  const {movie} = useContext(MovieContext);
  const genres = movie.genres?.map(({name}) => name).join(" , ")
  const lang = (movie.original_language && (movie.original_language).toUpperCase());
  return (
    <>
    <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price = {price} />
      <div className="flex flex-col gap-3 lg:gap-8">
        <div className="flex items-center gap-3 md:px-4">
          <div className="w-40 h-8">
            <img
              src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
              alt="premier"
              className="w-full h-full"
            />
          </div>
          <span className="bg-bms-700 p-1 text-xs text-white rounded-md">
            Streaming now
          </span>
        </div>
        <h1 className="text-white lg:text-5xl font-bold hidden lg:block ">
          {movie.original_title}
        </h1>
        <div className="flex flex-col-reverse gap-3 lg:gap-5 lg:flex-col">
          <div className="text-white font-light flex flex-col gap-2 md:px-4">
            <h4>4k &bull; {lang} &bull; Action</h4>
            <h4>{movie.runtime} Min &bull; {genres} &bull; 13+</h4>
          </div>
          <div className="flex items-center gap-3 md:px-4 md:w-screen lg:w-full">
            <button className="bg-signupButton w-full py-3 text-white font-semibold rounded-lg" onClick={rentMovies}>
              Rent ₹149
            </button>
            <button className="bg-signupButton w-full py-3 text-white font-semibold rounded-lg" onClick={buyMovies}>
              Buy ₹699 
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
