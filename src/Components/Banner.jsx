import sundarban from "../assets/88Bengal Tiger in Sundarbans.jpg"
import everest from "../assets/images.jpg"
import desert from "../assets/4-days-desert-tour-fes-to-marrakech-700x500.webp"
import AdventureCards from "./AdventureCards";

const Banner = () => {
  return (
    <div className="w-full  mt-5">

      <div className="w-full ">
        <div className="carousel ">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={sundarban}
              className="w-full h-[750px]" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={everest}
              className="w-full h-[750px]" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={desert}
              className="w-full h-[750px]" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>

        </div>
      </div>
      <div className="mt-3">
        <AdventureCards></AdventureCards>
      </div>

    </div>


  );
};

export default Banner;