import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrevClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slide.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const isLastSlide = currentIndex === slide.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const slide = [
    {
      url: "https://plus.unsplash.com/premium_photo-1669050702623-40e1184fa2b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    },
    {
      url: "https://images.unsplash.com/photo-1715239404546-bba0a39345cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
    },
    {
      url: "https://images.unsplash.com/photo-1715034136201-00dc287f7868?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1715006020121-dd50879f9821?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1669638780821-4c4c1329f842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
    },
  ];

  return (
    <>
      <div className="max-w-[900px] group h-[720px] w-full py-16 px-4 m-auto  relative">
        <div
          style={{ backgroundImage: `url(${slide[[currentIndex]].url})` }}
          className="w-full h-full duration-300 bg-center bg-cover rounded-2xl"
        ></div>
        <div
          onClick={handlePrevClick}
          className=" hidden bg-white/60 hover:bg-white text-black group-hover:block duration-500 absolute top-[50%] left-5 -translate-x-0 translate-y-[-50% rounded-full p-2 cursor-auto ] "
        >
          <BsChevronCompactLeft size={30} />
        </div>
        <div
          onClick={handleNextClick}
          className="hidden bg-white/60 hover:bg-white text-black group-hover:block duration-500 absolute top-[50%] right-5 -translate-x-0 translate-y-[-50% rounded-full p-2 cursor-auto ] "
        >
          <BsChevronCompactRight size={30} />
        </div>
      </div>
    </>
  );
}

export default App;
