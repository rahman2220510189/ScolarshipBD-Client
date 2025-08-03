import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    quote: "Never give up; eventually someone will give you a scholarship.",
    name: "Mariah – Houston, TX",
    prize: "$500 Winner",
    image: "https://i.ibb.co/DgTXcFRC/portrait-diploma-woman-with-graduation-university-happiness-with-knowledge-education-achievement-fac.jpg", 
  },
  {
    quote: "Hard work always pays off.",
    name: "James – Chicago, IL",
    prize: "$1000 Winner",
    image: "https://i.ibb.co/C5p2rpyC/images-2.jpg",
  },
  {
    quote: "Stay focused and keep applying!",
    name: "Ayesha – Atlanta, GA",
    prize: "$750 Winner",
    image: "https://i.ibb.co/7xhzPXfG/imresizer-1716310851157-1024x683.jpg",
  },
];

const ThirdHome = () => {
    const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:5000,
  };
    return (
         <div className="bg-gray-100 py-10 px-5 mx-auto">
      <Slider {...settings}>
        {reviews.map((item, index) => (
          <div key={index} className="bg-white rounded-3xl flex flex-col md:flex-row items-center justify-center p-6 max-w-5xl mx-auto">
            <div className="md:w-1/2 text-center md:text-left space-y-3 p-5">
              <div className="text-5xl text-blue-600">❝</div>
              <p className="text-lg font-medium">{item.quote}</p>
              <p className="font-semibold">{item.name}</p>
              <p className="text-xl font-bold text-blue-800">{item.prize}</p>
              <button className="mt-4 bg-sky-600 text-white px-6 py-2 rounded-full font-semibold">
                SIGN ME UP
              </button>
            </div>
            <div className="md:w-1/2 p-5">
              <img src={item.image} alt={item.name} className="rounded-2xl object-cover h-80 w-full" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
    );
};

export default ThirdHome;