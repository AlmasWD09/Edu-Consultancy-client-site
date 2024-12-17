import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img01 from "/images/review/image01.png";
import img02 from "/images/review/image02.png";
import img03 from "/images/review/image03.png";
import { FaQuoteRight } from "react-icons/fa6";

const Review = () => {
  const [timeLeft, setTimeLeft] = useState(0); // Timer state to control countdown
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (swiper, time) => {
    // Update the countdown timer
    setTimeLeft(Math.ceil(time / 1000));
  };

  const onSlideChange = () => {
    // Reset the timer when the slide changes
    setTimeLeft(0);
  };

  const reviews = [
    {
      quote: "Awesome Coding",
      review:
        "Coding is an art that turns ideas into reality. Every line of code builds logic, functionality, and beauty into solutions for complex problems. From algorithms to UI design, it’s a journey of creativity and precision. Debugging sharpens skills, while learning new technologies fuels innovation. Awesome coding is not just about syntax but about solving real-world challenges with passion, collaboration, and resilience. Code changes the world—one program at a time.",
      rating: 4,
      name: "Random Don",
      position:"Art student",
      image: img01,
    },
    {
      quote: "Great Support",
      review:
        "Hic culpa eos fugit, veritatis quo placeat modi temporibus quis, earum nobis provident libero tenetur. \
        Vivamus lacinia eros ut nisi congue, in condimentum ligula vestibulum. Curabitur vel neque a felis malesuada \
        fermentum a non lorem. Mauris auctor bibendum turpis, quis dignissim justo faucibus non. Nullam congue urna id \
        purus convallis, vel sodales est pharetra. Praesent accumsan luctus libero, non tempus erat eleifend et. Duis ut \ ",
      rating: 5,
      name: "Devid Smith",
      position:"Design Student",
      image: img02,
    },
    {
      quote: "Exceptional Design",
      review:
        "Molestias adipisci mollitia similique neque esse ratione eos reprehenderit sint. Ut auctor erat sed arcu feugiat \
        ullamcorper. Duis vel dapibus sem. Mauris interdum purus at volutpat malesuada. Pellentesque cursus felis eget ante \
        vehicula, ac pharetra augue viverra. Suspendisse eget tortor suscipit, faucibus turpis sed, luctus velit. Nam eget \
        neque sed erat ultrices aliquam. Aenean interdum convallis ligula, nec vulputate nisi volutpat a. Integer sagittis " ,
      rating: 5,
      name: "Jons smith",
      position:"Art student",
      image: img03,
    },
  ];

  return (
      <div className="container mx-auto px-4 max-w-4xl flex flex-col  justify-center  my-10">
        <div className="pb-6">
        <h4 className="uppercase">Testimonial</h4>
        <h2 className="text-xl font-semibold">What People are Saying About Virtual Edu Conts.</h2>
        <p className="max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est laoreet aliquet a risus vivamus id a. Augue mauris aliquet at.</p>
        </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}  // Update timer
        onSlideChange={onSlideChange}  // Reset timer on slide change
        className="mySwiper max-w-4xl"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-red-50/30 p-8 rounded-xl space-y-3">
                <FaQuoteRight className="text-7xl text-red-300" />
              <p>{review.review}</p>
              <p className="flex items-center text-yellow-200 text-3xl font-bold gap-3">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i}>&#9733;</span> // Star icon
                ))}
              </p>
              <div className="flex justify-between items-center gap-3">
                <div className="flex gap-3">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={review.image}
                    alt={review.name}
                  />
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-xs">{review.position}</p>
                  </div>
                </div>
                {/* Autoplay countdown */}
                <div
                  className="autoplay-countdown w-12 h-12 flex justify-center items-center text-center font-bold text-lg bg-gray-600  rounded-full"
                >
                  <span
                    ref={progressContent}
                    className="text-white"
                  >
                    {timeLeft}s
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;